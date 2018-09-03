import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Storage } from './storage.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Subject} from 'rxjs/Subject';
import HighchartsExporting = require('highcharts/modules/exporting');
import * as HighChart from 'highcharts/highcharts';
import * as Highcharts from 'highcharts';
HighchartsExporting(HighChart);
import {ChartModule} from "angular2-highcharts";
declare var $:any;
declare var FB:any;

@Component({
	selector: 'detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.css','./favorite.component.css']
})

export class StockD implements OnDestroy {

	@Output() tabChange = new EventEmitter();
	slideL()
	{
		this.tabChange.emit();
	}
	//Sub
	priceSub: Subscription;
	rem: Subscription;
	basicSub: Subscription;
	idxSub: Subscription;
	private clearSub: Subscription;
	
 	basicData: Object;
	inFavo:string="disable";
	idxData: Object;
	curIdx: string;
	curTab: string;
	imgSrc: string;
	
	priceD:any;
	priceChart:Object;
	indStore: Object = new Object();
	idxStatus:Object;
	infoStatus:string='wait';
	ngOnInit()
	{
		this.idxStatus = new Object();
		this.curTab = "basic";
		this.curIdx = 'Price';
		this.infoStatus='wait';
		this.basicData=new Object();
		this.idxData = new Object();
		this.indStore = new Object();
		this.inFavo="disable";
		this.priceChart = new Object();
		this.priceD = new Object();
	}
	
	interval:any;
	lastSymbol:string="";
	autoUpdate(symbol: string){
		if (this.lastSymbol != symbol){
			this.lastSymbol = symbol;
			clearInterval(this.interval);
			this.interval=setInterval(()=>
			{
				this.Storage.getBasicInfo(symbol);;
			}, 50000);
		}
	}
	
	constructor(private Storage: Storage) {
	//BASIC INFO
	this.basicSub = Storage.stockBasic$.subscribe(
		data=>{
			if (!data || data["status"] == "fail")
			{
				this.infoStatus='fail';
				return;
			}
			this.autoUpdate(data["symbol"]);
			this.basicData = data;
			this.imgSrc = "assets/icons/"+data["id"]+".png";
			var date = new Date(data["last_updated"] * 1000);
			this.basicData["date"] = date.toLocaleString();
			var localData=localStorage.getItem("favorite");
			var localObj= new Object();
			localObj=JSON.parse(localData);
			if (localObj == null)
				localObj = new Object();
			if (data["symbol"] in localObj)
			{
				this.inFavo="in";
			}
			else
			{
				this.inFavo="out";
			}
			this.infoStatus='ok';
		}
	);
	
	this.rem=Storage.remstar$.subscribe(
		data=>{
			if (data == this.basicData["symbol"])
			{
				this.inFavo="out";
			}
		}
	);
	}
	
	addFavo()
	{
		this.Storage.addFavo(this.basicData);
		this.inFavo = "in";
	}
	
	delFavo()
	{
		this.Storage.remFavo(this.basicData["symbol"]);
		this.inFavo="out";
	}

	share()
	{
		var hiData = {
			options: JSON.stringify(this.idxData[this.curIdx]),
			type: 'image/png',
			async: true
		};
		var expUrl = 'http://export.highcharts.com/';
		$.post(expUrl, hiData, (chart) => {
			  var shareUrl = expUrl + chart;
			  this.shareFB(shareUrl);
		}).fail(function(response) {
			alert('Error: ' + response.responseText);
		});	

	}

   	shareFB(shareUrl:string)
	{
		FB.ui({
		app_id: '529056017456647',
		method: 'feed',
		picture: shareUrl 
		}, (response) => {
			if (response && !response.error_message) {
			} else {
				console.log("SHARE Fail");
			}
		});
	}
	
	tabBasic()
	{
		this.curTab = "basic";
	}
	tabHistory()
	{
		this.curTab = "history";
	}
	tabNews()
	{
		this.curTab = "news";
	}
	ngOnDestroy()
	{
		this.basicSub.unsubscribe();
		this.idxSub.unsubscribe();
	}

	changeIdx(idx: string)
	{
		this.curIdx = idx;
	}
}
