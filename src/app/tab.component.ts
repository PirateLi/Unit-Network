import {
  Component,
  Input
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {Subscription} from 'rxjs/Subscription';
import {Historical} from './historical.component'
import {Storage} from './storage.service';
import HighchartsExporting = require('highcharts/modules/exporting');
import * as Highstock from 'highcharts/highstock';
HighchartsExporting(Highstock);

@Component({
	selector: 'tabs',
	templateUrl: './tab.component.html',
	styleUrls: ['./tab.component.css'],
	animations: [
    trigger('favo', [
			state('left', style({
			'display': 'block',
		})),
		state('right', style({
			'display': 'none'
		})),
		transition('right => left', [
			style({transform: 'translateX(150%)',}),
			animate(500)
		])
    ]),
    trigger('info', [
		state('left', style({
			'display': 'none'
		})),
			state('right', style({
			'display': 'block',
		})),
			transition('left => right', [
			style({transform: 'translateX(-150%)'}),
			animate(500)
		])
    ])
  ]
})

export class Tabs{
	favo:string = 'left';
	info:string = 'left';
	curDisplay:string;
	slideSub : Subscription;
	constructor(private Storage:Storage){
		this.slideSub = Storage.slide$.subscribe(
			data=>{
				if(data == 'left')
				{
					if (this.info == 'right')
						this.gol1();
				}
				if (data == 'right')
				{
					if (this.info == 'left')
						this.gor1();
				}
			}
		);
		
		
	}
	
	goHist()
	{
	}
	gol1() 
	{
		this.info = 'left';
		this.favo = 'left';
	}
	gor1()
	{
		this.favo = 'right';
		this.info = 'right';
	}
	
	gol($event) 
	{
		this.info = 'left';
		this.favo = 'left';
	}
	gor($event)
	{
		this.favo = 'right';
		this.info = 'right';
	}
}