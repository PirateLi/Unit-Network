import {
	Component,
	Input
} from '@angular/core';
import HighchartsExporting = require('highcharts/modules/exporting');
import * as Highstock from 'highcharts/highstock';
HighchartsExporting(Highstock);
import {Subscription} from 'rxjs/Subscription';
import {Storage} from './storage.service';
@Component({
	selector: 'historical',
	templateUrl: './historical.component.html',
	styleUrls: ['./historical.component.css'],
})

export class Historical{
	getHistory: Subscription;
	clearSub: Subscription;
	historyD: any;
	historySaved:Object;
	hisStatus:string = 'wait';
  constructor( private Storage: Storage ){
  
  		this.clearSub=Storage.clearMsg$.subscribe(
		data=>{
			this.ngOnInit();
		}
		);
		
    this.getHistory = Storage.historicalData$.subscribe(
	data => {
		if (!data || data["status"] == 'fail')
		{
			this.hisStatus = 'fail';
			return;
		}
		var idx = 0;
		this.historyD = data["data"];
		var hisHiChart =new Array();
		for (var i =this.historyD.length-1;i>=0;i--)
		{
			var item=[this.historyD[i][0], this.historyD[i][2]];
			hisHiChart.push([this.historyD[i][0], this.historyD[i][2]]);
		}
		console.log(hisHiChart);
		
        var hisChart = {
			title: {
			text: ' Stock Value'
			},
			subtitle: {
				useHTML: true,
				text: '<a target="_blank" style="color:blue;font-size:14px" href="https://www.alphavantage.co">Source: Alpha Vantage</a>'
			},
			rangeSelector: {
			buttons: [{
			  type: 'week',
			  count: 1,
			  text: '1w'
			}, {
			  type: 'month',
			  count: 1,
			  text: '1m'
			}, {
			  type: 'month',
			  count: 3,
			  text: '3m'
			}, {
			  type: 'month',
			  count: 6,
			  text: '6m'
			}, {
			  type: 'ytd',
			  count: 1,
			  text: 'YTD'
			}, {
			  type: 'year',
			  count: 1,
			  text: '1y'
			}, {
			  type: 'all',
			  count: 1,
			  text: 'All'
			}],
			selected: 0
			},
			series: [{
			name: 'symbol',
			type: 'area',
			data: hisHiChart,
			color: '#97C2E8',
			tooltip: [{
			  valueDecimals: 2
			}]
			}],
			tooltip:{
				split:false
			}
        };
		if (hisChart)
		{
			Highstock.stockChart('testHighchart', hisChart);
			this.hisStatus = 'ok';
		}
		else
			this.hisStatus = 'fail';
      });

  };
	ngOnInit()
	{
		this.historySaved=new Object();
		this.historyD=new Object();
		this.hisStatus='wait';
	}

}
