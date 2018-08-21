import {
	Component,
	Input
} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Storage} from './storage.service';

@Component({
	selector: 'news',
	templateUrl: './news.component.html',
	styleUrls:['./news.component.css'],
})

export class News{
	newsSub: Subscription;
	newsData: Object;
	newsStatus: string = 'wait';
	private clearSub: Subscription;
	ngOnInit()
	{
		this.newsData=[];
		this.newsStatus='wait';
	}
	constructor( private Storage: Storage ){
		this.newsSub = Storage.stockNews$.subscribe(
			data=>{
				if (!data || data[0] == "fail")
				{
					this.newsStatus = 'fail';
					return;
				}
				this.newsData=data;
				this.newsStatus = 'ok';
			}
		);
		
		this.clearSub=Storage.clearMsg$.subscribe(
		data=>{
			this.ngOnInit();
		}
		);
	}
	
  
}