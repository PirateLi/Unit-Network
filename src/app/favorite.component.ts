import {Component, Output, EventEmitter} from '@angular/core';
import {StockD} from './detail.component';
import {Subscription} from 'rxjs/Subscription';
import {Subject} from 'rxjs/Subject';
import {Storage} from './storage.service';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})

export class FavoriteL {
	newFavoSub: Subscription;
	delFavoSub: Subscription;
	enableR: Subscription;
	localObj: Object;
	keyS:string="default";
	ascS:string="Ascending";
	favData=[];
	hasData:boolean=false;
	goRight:boolean=false;
	private clearSub: Subscription;
	
	ngOnInit()
	{
		this.goRight=false;
		var localData=localStorage.getItem("favorite");
		this.favData = [];
		this.localObj=JSON.parse(localData);
		for (var obj in this.localObj)
		{
			this.favData.push(this.localObj[obj]);
		}
		this.hasData = false;
	}
	
	constructor(private Storage: Storage){
		this.clearSub=Storage.clearMsg$.subscribe(
			data=>{
				this.ngOnInit();
			}
		);
		
		this.enableR=Storage.stockNews$.subscribe(
			data=>{
				this.goRight=true;
			}
		);
		
		this.newFavoSub = Storage.newFavo$.subscribe(
			data=>{
				var symbol = data["symbol"];
				var localData=localStorage.getItem("favorite");
				
				this.localObj=JSON.parse(localData);
				if (this.localObj == null)
				{
					this.localObj = new Object();
				}

				var newObj = this.localObj;
				newObj[symbol]=data;
				this.favData=[];
				for (var obj in newObj)
				{
					this.favData.push(newObj[obj]);
				}
				if (this.favData.length)
					this.hasData = true;
				localStorage.setItem("favorite", JSON.stringify(newObj));
				if (this.keyS != 'default')
				{
					this.favData = this.sortByKey(this.favData, this.keyS, this.ascS == "Ascending"? true : false);
				}
			}
		);
		
		this.delFavoSub = Storage.delFavo$.subscribe(
			data=>{
				var localData=localStorage.getItem("favorite");

				this.localObj=JSON.parse(localData);
				if (this.localObj == null)
					this.localObj = new Object();
				delete this.localObj[data];

				this.favData=[];
				for (var obj in this.localObj)
				{
					this.favData.push(this.localObj[obj]);
				}
				if (!this.favData.length)
					this.hasData = false;
				localStorage.setItem("favorite", JSON.stringify(this.localObj));
				
				if (this.keyS != 'default')
				{
					this.favData = this.sortByKey(this.favData, this.keyS, this.ascS == "Ascending"? true : false);
				}

			}
		);
		
		
	}
	search(symbol:string)
	{
		this.Storage.getBasicInfo(symbol);
		this.Storage.slideTo('right');
	}
	
	sortByKey(stocks:any, key:string, asc)
	{
		stocks = stocks.sort(function(a, b) {
		if (key != 'symbol')
		{
			a = a.quotes.USD;
			b = b.quotes.USD;
		}
		var x = a[key].toString().replace(/\,/g,"");
		var y = b[key].toString().replace(/\,/g,"");
		if (key != 'symbol')
		{
			x = parseFloat(x);
			y = parseFloat(y);
		}
		var ind = asc? -1: 1;
		return ((x < y) ? ind : ((x > y) ? -ind : 0));
		});
		return stocks;

	}
	
	auto=0;
	interval:any;
	autoRe()
	{
		this.auto = 1-this.auto;
		if (this.auto == 0)
		{
			clearInterval(this.interval);
		}
		else
		{
			this.interval=setInterval(()=>
			{
				this.Storage.refreshFavo();

			}, 5000);		
		}
	}
	match={"Symbol":"symbol","Default":"default","Price":"price", "Change Percent":"percent_change_1h", "Volume":"volume_24h"}
	ascChange(asc:string)
	{
		this.ascS = asc;
		if (this.keyS != 'default')
		{
			this.favData = this.sortByKey(this.favData, this.keyS, this.ascS == "Ascending"? true : false);
		}			
	}
	
	keyChange(key:string)
	{
		this.keyS = this.match[key];

		if (this.keyS != 'default')
		{
			this.favData = this.sortByKey(this.favData, this.keyS, this.ascS == "Ascending"? true : false);
		}	
	}
	
	// DELETE
	remStar(symbol: string)
	{
		this.Storage.remStar(symbol);
		this.Storage.remFavo(symbol);
	}
	
	refreshFavo()
	{
		this.Storage.refreshFavo();
	}
	
	@Output() tabChange = new EventEmitter();
	slideR()
	{
		this.tabChange.emit();
	}
}
