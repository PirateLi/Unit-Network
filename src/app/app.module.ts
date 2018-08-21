import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatOptionModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ChartModule} from "angular2-highcharts";

import {AppComponent} from './app.component';
import {Tabs} from './tab.component';
import {AutoC} from './autoc.component';
import {FavoriteL} from './favorite.component'
import {Historical} from './historical.component';
import {StockD} from './detail.component';
import {News} from './news.component';
import * as highcharts from 'highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

export function highchartsFactory() {
  return highcharts;
}
@NgModule({
  declarations: [
    AppComponent,
	AutoC,
	Tabs,
	Historical,
	FavoriteL,
	StockD,
	News
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    FormsModule,
    ReactiveFormsModule,
	ChartModule
  ],
  providers: [    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
