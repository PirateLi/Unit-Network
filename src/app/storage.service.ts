import {Injectable} from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class Storage {

	private subject = new Subject<string>();
	subjectAnnounce$ = this.subject.asObservable();

	private stockIdx = new Subject<any>();
	stockIdx$ = this.stockIdx.asObservable();
	

	constructor(private http: HttpClient){};

	//BASIC INFO
	private stockBasic=new Subject<any>();
	stockBasic$=this.stockBasic.asObservable();
	private basicInfoApi="https://morning-plateau-97808.herokuapp.com/api/info?";
	getBasicInfo(stock_name: string)
	{
		var params = new HttpParams().set('symbol', stock_name);
		this.http.get(this.basicInfoApi, {params}).subscribe(
			data => {
				this.stockBasic.next(data);
			}
		);
	}
	
	//
	private remstar = new Subject<any>();
	remstar$=this.remstar.asObservable();
	remStar(symbol:string)
	{
		this.remstar.next(symbol);
	}
	
	
	//slide change
	private slide = new Subject<any>();
	slide$=this.slide.asObservable();
	slideTo(direct: string)
	{
		this.slide.next(direct);
	}
	
	//add favo
	private newFavo = new Subject<string>();
	newFavo$ = this.newFavo.asObservable();
	addFavo(newData: any)
	{
		this.newFavo.next(newData);
	}
	
	//remove favo
	private delFavo = new Subject<string>();
	delFavo$ = this.delFavo.asObservable();
	remFavo(delData: string)
	{
		this.delFavo.next(delData);
	}
	
	refreshFavo()
	{
		var localData=localStorage.getItem("favorite");		
		var localObj=JSON.parse(localData);
		if (localObj == null)
		{
			return;
		}
		var newObj=new Object();
		for (var obj in localObj)
		{
			var params = new HttpParams().set('symbol', localObj[obj]['symbol']);
			this.http.get(this.basicInfoApi, {params}).subscribe(
				data => {
					this.addFavo(data);
				}
			);
		}
	}
	
	//CLEAR
	private clearMsg = new Subject<any>();
	clearMsg$=this.clearMsg.asObservable();
	status = 0;
	clearAll()
	{
		this.status++;
		this.clearMsg.next(status);
	}
}
