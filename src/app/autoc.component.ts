import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {Storage} from './storage.service';
import {Term} from './term';

@Component({
	selector: 'autoc',
	templateUrl: './autoc.component.html',
	styleUrls: ['./autoc.component.css'],
})

export class AutoC implements OnInit {

	constructor(
		private http: HttpClient,
		private Storage: Storage
	) {}
	
	message: any;
	controller: FormControl = new FormControl();
	bigController: FormControl = new FormControl();
	options: Observable<any[]>;
	inputSymbol:string;
	errorInput:boolean = true;
	clickF:boolean=false;
	
	ngOnInit() {
		this.inputSymbol='';
		this.options = this.controller.valueChanges
			.debounceTime(300)
			.distinctUntilChanged()
			.startWith(null)
			.map(val => val ? this.filter(val) : []);
		this.clickF = false;
		this.errorInput = true;
	}

	clickForm()
	{
		this.clickF=true;
	}
	
	validate(e: any)
	{
		if(!this.controller.value.trim())
			this.errorInput= true;
		else {
			var keycode = window.event?e.keyCode:e.which;
			if(keycode==13){
				this.getInfo(this.inputSymbol);
			}
			this.errorInput= false;
		}
	}
	
	filter(val: string): any[] {
		const list = [];
		this.search(val).then(
			res => {
				res.forEach(function(ele) {
					list.push(ele);
				});
			}
		);
		return list;
	}
	
	private autoApi = 'http://angular2-env.92hivcqzt8.us-west-1.elasticbeanstalk.com/api/auto';
	search(symbol: string): Promise<Term[]> {
		const params = new HttpParams()
		  .set('input', symbol);
		return this.http.get<any[]>(this.autoApi, {params})
			.toPromise()
			.then(data => data as Term[])
			.catch(this.handleError);
	}
	private handleError(error: any): Promise<any> {
		return Promise.reject(error.message || error);
	}
	
	getInfo(symbol:string) {
		this.Storage.clearAll();
		this.Storage.getBasicInfo(symbol);
		this.Storage.slideTo('right');
	}

	clear() {
		this.ngOnInit();
		this.Storage.clearAll();
		this.Storage.slideTo('left');
	}
}


