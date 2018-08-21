webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var storage_service_1 = __webpack_require__("../../../../../src/app/storage.service.ts");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "\n\t\t<autoc></autoc>\n\t\t<tabs></tabs>\n\t",
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [storage_service_1.Storage]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var angular2_highcharts_1 = __webpack_require__("../../../../angular2-highcharts/index.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var tab_component_1 = __webpack_require__("../../../../../src/app/tab.component.ts");
var autoc_component_1 = __webpack_require__("../../../../../src/app/autoc.component.ts");
var favorite_component_1 = __webpack_require__("../../../../../src/app/favorite.component.ts");
var historical_component_1 = __webpack_require__("../../../../../src/app/historical.component.ts");
var detail_component_1 = __webpack_require__("../../../../../src/app/detail.component.ts");
var news_component_1 = __webpack_require__("../../../../../src/app/news.component.ts");
var highcharts = __webpack_require__("../../../../highcharts/highcharts.js");
var HighchartsService_1 = __webpack_require__("../../../../angular2-highcharts/dist/HighchartsService.js");
function highchartsFactory() {
    return highcharts;
}
exports.highchartsFactory = highchartsFactory;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                autoc_component_1.AutoC,
                tab_component_1.Tabs,
                historical_component_1.Historical,
                favorite_component_1.FavoriteL,
                detail_component_1.StockD,
                news_component_1.News
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatAutocompleteModule,
                material_1.MatFormFieldModule,
                material_1.MatInputModule,
                material_1.MatOptionModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                angular2_highcharts_1.ChartModule
            ],
            providers: [{
                    provide: HighchartsService_1.HighchartsStatic,
                    useFactory: highchartsFactory
                }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/autoc.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-untouched[required] {\r\n  border: 1px solid gray;\r\n}\r\n.ng-touched[required] {\r\n  border: 1px solid blud;\r\n}\r\n.ng-valid[required], .ng-valid.required  {\r\n  border: 1px solid green;\r\n}\r\n.ng-invalid:not(form)  {\r\n  border: 1px solid red; \r\n  }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/autoc.component.html":
/***/ (function(module, exports) {

module.exports = "<form  (click)=\"clickForm()\" role=\"form\" style=\"text-align:left;max-width:1300px;padding:2px;border-radius:6px;background-color:white\">\r\n\t<h3 align=\"center\" style=\"margin:10px\">Coin Market Search</h3>\r\n\t<form #searchForm=\"ngForm\" class=\"form-inline\" class=\"row\">\r\n\t  <label for=\"input\" style=\"font-size:14px;left:10px;margin:5px 0 15px 0\" class=\"col-md-2  col-xs-12\">Enter Symbol:<span style=\"color:red\"> *</span></label>\r\n\t  <div class=\"form-group\"  class=\"col-md-6  col-xs-12\" style=\"left:10px;margin:5px 0 15px 0\">\r\n\t\t\t<input id=\"input\" class=\"form-control\" #symbolInput required [(ngModel)]=\"inputSymbol\" aria-label=\"stock_name\" [formControl]=\"controller\" placeholder=\"e.g AAPL\" (keyup)=\"validate()\">\r\n\t\t\t<div *ngIf=\"((errorInput && clickF)||(controller.dirty || controller.touched) && errorInput)\">\r\n\t\t\t  Please enter a coin ticker symbol.\r\n\t\t\t</div>\r\n\t  </div>\r\n\t  <div class=\"form-group\"  style=\"left: 10px;margin:5px 0 15px 0;\" class=\"col-md-4  col-xs-12\">\r\n\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"getInfo(inputSymbol)\" [disabled]=\"errorInput\">\r\n\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i> Get Quote\r\n\t\t</button>\r\n\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"clear(); controller.reset()\">\r\n\t\t\t<i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Clear\r\n\t\t</button>\r\n\t  </div>\r\n\t</form>\r\n</form>\r\n\r\n<hr style=\"width:95%;color:white\">"

/***/ }),

/***/ "../../../../../src/app/autoc.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
__webpack_require__("../../../../rxjs/_esm5/Rx.js");
__webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
var storage_service_1 = __webpack_require__("../../../../../src/app/storage.service.ts");
var AutoC = (function () {
    function AutoC(http, Storage) {
        this.http = http;
        this.Storage = Storage;
        this.controller = new forms_1.FormControl();
        this.bigController = new forms_1.FormControl();
        this.errorInput = true;
        this.clickF = false;
        this.autoApi = 'http://angular2-env.92hivcqzt8.us-west-1.elasticbeanstalk.com/api/auto';
    }
    AutoC.prototype.ngOnInit = function () {
        var _this = this;
        this.inputSymbol = '';
        this.options = this.controller.valueChanges
            .debounceTime(300)
            .distinctUntilChanged()
            .startWith(null)
            .map(function (val) { return val ? _this.filter(val) : []; });
        this.clickF = false;
        this.errorInput = true;
    };
    AutoC.prototype.clickForm = function () {
        this.clickF = true;
    };
    AutoC.prototype.validate = function () {
        if (!this.controller.value.trim())
            this.errorInput = true;
        else
            this.errorInput = false;
    };
    AutoC.prototype.filter = function (val) {
        var list = [];
        this.search(val).then(function (res) {
            res.forEach(function (ele) {
                list.push(ele);
            });
        });
        return list;
    };
    AutoC.prototype.search = function (symbol) {
        var params = new http_1.HttpParams()
            .set('input', symbol);
        return this.http.get(this.autoApi, { params: params })
            .toPromise()
            .then(function (data) { return data; })
            .catch(this.handleError);
    };
    AutoC.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    AutoC.prototype.getInfo = function (symbol) {
        this.Storage.clearAll();
        this.Storage.getBasicInfo(symbol);
        this.Storage.slideTo('right');
    };
    AutoC.prototype.clear = function () {
        this.ngOnInit();
        this.Storage.clearAll();
        this.Storage.slideTo('left');
    };
    AutoC = __decorate([
        core_1.Component({
            selector: 'autoc',
            template: __webpack_require__("../../../../../src/app/autoc.component.html"),
            styles: [__webpack_require__("../../../../../src/app/autoc.component.css")],
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            storage_service_1.Storage])
    ], AutoC);
    return AutoC;
}());
exports.AutoC = AutoC;


/***/ }),

/***/ "../../../../../src/app/detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media(max-width: 1300px) {\r\n  .visable{\r\n    display:none;\r\n  }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\r\n  <div style=\"background-color:rgb(235,235,235);display:flow-root;text-align:center\" class=\"list-group-item\">\r\n    <span class=\"pull-left\">\r\n      <button href=\"#myCarousel\" data-slide=\"next\" type=\"button\" class=\"btn btn-default\" (click)=\"slideL()\">\r\n        <span class=\"glyphicon glyphicon-menu-left\"></span>\r\n      </button>\r\n    </span>\r\n    <span id=\"title_stock-detail\">\r\n      <h4 style=\"font-size:15px\">Coin Details</h4>\r\n    </span>\r\n  </div>\r\n\r\n  <div style=\"max-width:100%\" class=\"list-group-item\">\r\n    <ul class=\"nav nav-pills list-inline\">\r\n      <li [ngClass]=\"{'active': curTab=='basic'}\" (click)=\"tabBasic()\">\r\n        <a href=\"javascript:void(0);\">\t\r\n          <span class=\"glyphicon glyphicon-time\"></span>\r\n          <span class=\"visable\">Current</span> Coin</a>\r\n      </li>\r\n    </ul>\r\n\t<hr style=\"width:95%;color:lightgray\">\r\n\t<div style=\"margin:20px 0\">\r\n    <div [hidden]=\"curTab != 'basic'\" class=\"row\">\r\n      <div  class=\"col-md-12\" style=\"margin:15px 0\">\r\n        <div class=\"row\" style=\"margin:2px; justify-content:center\">\r\n          <span class=\"col-md-6 pull-left\" style=\"text-align:left\" *ngIf=\"infoStatus=='ok'\">\r\n            <h2>{{ basicData.symbol }}</h2>\r\n          </span>\r\n          <div class=\"col-md-6\">\r\n\t\t\t<!--STAR-->\r\n            <div class=\"pull-right\" style=\"display:flex; justify-content:center\">\r\n\t\t\t<span [hidden]=\"inFavo=='in'\" >\r\n\t\t\t\t<button  [disabled]=\"infoStatus!='ok'\" type=\"button\" class=\"btn btn-default\" style=\"padding:2px;width:40px;height:40px;text-align:center\" (click)=\"addFavo()\"> \r\n\t\t\t\t<span  class=\"glyphicon glyphicon-star-empty\" aria-hidden=\"true\"></span>\r\n\t\t\t\t</button>\r\n\t\t\t</span>\r\n\t\t\t<span [hidden]=\"inFavo!='in'\">\r\n\t\t\t\t\t<button [disabled]=\"infoStatus!='ok'\" type=\"button\" class=\"btn btn-default\" style=\"padding:2px;width:40px;height:40px;text-align:center\" (click)=\"delFavo()\">\r\n\t\t\t\t\t<span  style=\"color:yellow\" class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\t\t\r\n        <div [hidden]=\"infoStatus!='wait'\" class=\"progress\" id=\"basicData_progress\">\r\n          <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"10\" aria-valuemin=\"0\"\r\n            aria-valuemax=\"100\"></div>\r\n        </div>\r\n\t\t<div class=\"error-alert\" [hidden]=\"infoStatus!='fail'\">\r\n\t\t\t\t<div class=\"alert alert-danger\" role=\"alert\">\r\n\t\t\t\t\tError! Failed to get current stock data.\r\n\t\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div style=\"width:100%\" class=\"table-responsive\">\r\n\t\t\t<table [hidden]=\"infoStatus!='ok'\" *ngIf=\"infoStatus=='ok'\" class=\"table table-striped\" style=\"text-align:left\">\r\n\t\t\t  <tbody>\r\n\t\t\t\t<tr>\r\n\t\t\t\t  <th>USD Price</th>\r\n\t\t\t\t  <th>24H Volume</th>\r\n\t\t\t\t  <th>Market Cap</th>\r\n\t\t\t\t  <th>1H Change</th>\r\n\t\t\t\t  <th>24H Change</th>\r\n\t\t\t\t  <th>7D Change</th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t  <td>{{ basicData.quotes.USD.price }}</td>\r\n\t\t\t\t  <td>{{ basicData.quotes.USD.volume_24h }}</td>\r\n\t\t\t\t  <td>{{ basicData.quotes.USD.market_cap }}</td>\r\n\t\t\t\t  <td [ngClass]=\"{'red': (basicData.quotes.USD.percent_change_1h)[0]=='-'\r\n\t\t\t\t\t, 'green': (basicData.quotes.USD.percent_change_1h)[0]!='-'}\">\r\n\t\t\t\t\t{{ basicData.quotes.USD.percent_change_1h}}\r\n\t\t\t\t  </td>\r\n\t\t\t\t  <td [ngClass]=\"{'red': (basicData.quotes.USD.percent_change_24h)[0]=='-'\r\n\t\t\t\t\t, 'green': (basicData.quotes.USD.percent_change_24h)[0]!='-'}\">\r\n\t\t\t\t\t{{ basicData.quotes.USD.percent_change_24h}}\r\n\t\t\t\t  </td>\r\n\t\t\t\t  <td [ngClass]=\"{'red': (basicData.quotes.USD.percent_change_7d)[0]=='-'\r\n\t\t\t\t\t, 'green': (basicData.quotes.USD.percent_change_7d)[0]!='-'}\">\r\n\t\t\t\t\t{{ basicData.quotes.USD.percent_change_7d}}\r\n\t\t\t\t  </td>\r\n\t\t\t\t</tr>\r\n\t\t\t  </tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n      </div>\r\n\t  <div  class=\"col-md-12\" style=\"margin:15px 0;z-index:1\">\r\n\t\t<iframe src=\"https://unitnetwork-dash.herokuapp.com/\" name=\"myframe\" width=\"100%\" height=\"1500\" \r\n\t\tscrolling=\"no\" frameborder=\"0\" id=\"myframe\" border=\"0\" ></iframe>\r\n\t  </div>\r\n\t</div>\r\n    <!-- Historical Chart-->\r\n    <div [hidden]=\"curTab != 'history'\" class=\"row\" style=\"padding:3%\">\r\n\t\t<historical></historical>\r\n    </div>\r\n\t<!--News-->\r\n\t<div [hidden]=\"curTab!='news'\" class=\"row\">\r\n\t\t<news></news>\r\n\t</div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var storage_service_1 = __webpack_require__("../../../../../src/app/storage.service.ts");
var HighchartsExporting = __webpack_require__("../../../../highcharts/modules/exporting.js");
var HighChart = __webpack_require__("../../../../highcharts/highcharts.js");
HighchartsExporting(HighChart);
var StockD = (function () {
    function StockD(Storage) {
        var _this = this;
        this.Storage = Storage;
        this.tabChange = new core_1.EventEmitter();
        this.inFavo = "disable";
        this.indStore = new Object();
        this.infoStatus = 'wait';
        this.lastSymbol = "";
        //BASIC INFO
        this.basicSub = Storage.stockBasic$.subscribe(function (data) {
            if (!data || data["status"] == "fail") {
                _this.infoStatus = 'fail';
                return;
            }
            _this.autoUpdate(data["symbol"]);
            _this.basicData = data;
            var localData = localStorage.getItem("favorite");
            var localObj = new Object();
            localObj = JSON.parse(localData);
            if (localObj == null)
                localObj = new Object();
            if (data["symbol"] in localObj) {
                _this.inFavo = "in";
            }
            else {
                _this.inFavo = "out";
            }
            _this.infoStatus = 'ok';
        });
        this.rem = Storage.remstar$.subscribe(function (data) {
            if (data == _this.basicData["symbol"]) {
                _this.inFavo = "out";
            }
        });
    }
    StockD.prototype.slideL = function () {
        this.tabChange.emit();
    };
    StockD.prototype.ngOnInit = function () {
        this.idxStatus = new Object();
        this.curTab = "basic";
        this.curIdx = 'Price';
        this.infoStatus = 'wait';
        this.basicData = new Object();
        this.idxData = new Object();
        this.indStore = new Object();
        this.inFavo = "disable";
        this.priceChart = new Object();
        this.priceD = new Object();
    };
    StockD.prototype.autoUpdate = function (symbol) {
        var _this = this;
        if (this.lastSymbol != symbol) {
            this.lastSymbol = symbol;
            clearInterval(this.interval);
            this.interval = setInterval(function () {
                _this.Storage.getBasicInfo(symbol);
                ;
            }, 50000);
        }
    };
    StockD.prototype.addFavo = function () {
        this.Storage.addFavo(this.basicData);
        this.inFavo = "in";
    };
    StockD.prototype.delFavo = function () {
        this.Storage.remFavo(this.basicData["symbol"]);
        this.inFavo = "out";
    };
    StockD.prototype.share = function () {
        var _this = this;
        var hiData = {
            options: JSON.stringify(this.idxData[this.curIdx]),
            type: 'image/png',
            async: true
        };
        var expUrl = 'http://export.highcharts.com/';
        $.post(expUrl, hiData, function (chart) {
            var shareUrl = expUrl + chart;
            _this.shareFB(shareUrl);
        }).fail(function (response) {
            alert('Error: ' + response.responseText);
        });
    };
    StockD.prototype.shareFB = function (shareUrl) {
        FB.ui({
            app_id: '529056017456647',
            method: 'feed',
            picture: shareUrl
        }, function (response) {
            if (response && !response.error_message) {
            }
            else {
                console.log("SHARE Fail");
            }
        });
    };
    StockD.prototype.tabBasic = function () {
        this.curTab = "basic";
    };
    StockD.prototype.tabHistory = function () {
        this.curTab = "history";
    };
    StockD.prototype.tabNews = function () {
        this.curTab = "news";
    };
    StockD.prototype.ngOnDestroy = function () {
        this.basicSub.unsubscribe();
        this.idxSub.unsubscribe();
    };
    StockD.prototype.changeIdx = function (idx) {
        this.curIdx = idx;
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], StockD.prototype, "tabChange", void 0);
    StockD = __decorate([
        core_1.Component({
            selector: 'detail',
            template: __webpack_require__("../../../../../src/app/detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/detail.component.css"), __webpack_require__("../../../../../src/app/favorite.component.css")]
        }),
        __metadata("design:paramtypes", [storage_service_1.Storage])
    ], StockD);
    return StockD;
}());
exports.StockD = StockD;


/***/ }),

/***/ "../../../../../src/app/favorite.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".green{\r\n\tcolor:green;\r\n}\r\n\r\n.red{\r\n\tcolor:red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/favorite.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\r\n  <div style=\"background-color:rgb(234,234,234);display:flow-root;\" class=\"list-group-item\">\r\n    <span style=\"text-align:left;font-size:16px\" class=\"pull-left\">Favorite List</span>\r\n    <span class=\"pull-right\">\r\n        <span class=\"hidden-xs hidden-sm\">Automatic Refresh</span>\r\n\t\t<!--auto-->\r\n        <span (click)=\"autoRe()\"><input type=\"checkbox\" data-toggle=\"toggle\"></span>\r\n\t\t\r\n        <button (click)=\"refreshFavo()\" type=\"button\" class=\"btn btn-default\" aria-label=\"Left Align\">\r\n          <i class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></i>\r\n        </button>\r\n        <button [disabled]=\"!goRight\" type=\"button\" class=\"btn btn-default\" (click)=\"slideR()\">\r\n          <i class=\"glyphicon glyphicon-menu-right\"></i>\r\n        </button>\r\n    </span>\r\n  </div>\r\n  <div style=\"max-width:100%\" class=\"list-group-item\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-1 col-xs-12 pull-left\">\r\n        <span style=\"font-weight:bold\">Sort by</span>\r\n      </div>\r\n      <div class=\"form-group col-md-3 col-xs-12 pull-left\">\r\n        <select (change)=\"keyChange($event.target.value)\" class=\"form-control\">\r\n          <option>Default</option>\r\n          <option>Symbol</option>\r\n          <option>Price</option>\t\r\n          <option>Change Percent</option>\r\n          <option>Volume</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"col-md-1 col-xs-12 pull-left\">\r\n        <span style=\"font-weight:bold\">Order</span>\r\n      </div>\r\n      <div class=\"form-group col-md-3 col-xs-12 pull-left\">\r\n        <select (change)=\"ascChange($event.target.value)\" class=\"form-control\" [disabled]=\"keyS=='default'\">\r\n          <option>Ascending</option>\r\n          <option>Descending</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div style=\"width:100%\" class=\"table-responsive\">\r\n      <table class=\"table\" style=\"text-align:left\">\r\n        <thead>\r\n        <tr>\r\n          <th>Symbol</th>\r\n          <th>Stock Price</th>\r\n          <th>1H Change</th>\r\n          <th>24H Volume</th>\r\n          <th></th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n          <ng-container *ngFor=\"let data of favData\">\r\n            <tr>\r\n              <th scope=\"row\"><a (click)=\"search(data['symbol'])\">{{data.symbol}}</a></th>\r\n              <td>{{data.quotes.USD.price}}</td>\r\n              <td [ngClass]=\"{'red': (data.quotes.USD.percent_change_1h)[0]=='-', 'green': (data.quotes.USD.percent_change_1h)[0]!='-'}\">\r\n\t\t\t    {{data.quotes.USD.percent_change_1h}}\r\n\t\t\t  </td>\r\n              <td>{{data.quotes.USD.volume_24h}}</td>\r\n              <td>\r\n                <button (click)=\"remStar(data['symbol'])\" type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-trash\"></span></button>\r\n              </td>\r\n            </tr>\r\n          </ng-container>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/favorite.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var storage_service_1 = __webpack_require__("../../../../../src/app/storage.service.ts");
var FavoriteL = (function () {
    function FavoriteL(Storage) {
        var _this = this;
        this.Storage = Storage;
        this.keyS = "default";
        this.ascS = "Ascending";
        this.favData = [];
        this.hasData = false;
        this.goRight = false;
        this.auto = 0;
        this.match = { "Symbol": "symbol", "Default": "default", "Price": "price", "Change Percent": "percent_change_1h", "Volume": "volume_24h" };
        this.tabChange = new core_1.EventEmitter();
        this.clearSub = Storage.clearMsg$.subscribe(function (data) {
            _this.ngOnInit();
        });
        this.enableR = Storage.stockNews$.subscribe(function (data) {
            _this.goRight = true;
        });
        this.newFavoSub = Storage.newFavo$.subscribe(function (data) {
            var symbol = data["symbol"];
            var localData = localStorage.getItem("favorite");
            _this.localObj = JSON.parse(localData);
            if (_this.localObj == null) {
                _this.localObj = new Object();
            }
            var newObj = _this.localObj;
            newObj[symbol] = data;
            _this.favData = [];
            for (var obj in newObj) {
                _this.favData.push(newObj[obj]);
            }
            if (_this.favData.length)
                _this.hasData = true;
            localStorage.setItem("favorite", JSON.stringify(newObj));
            if (_this.keyS != 'default') {
                _this.favData = _this.sortByKey(_this.favData, _this.keyS, _this.ascS == "Ascending" ? true : false);
            }
        });
        this.delFavoSub = Storage.delFavo$.subscribe(function (data) {
            var localData = localStorage.getItem("favorite");
            _this.localObj = JSON.parse(localData);
            if (_this.localObj == null)
                _this.localObj = new Object();
            delete _this.localObj[data];
            _this.favData = [];
            for (var obj in _this.localObj) {
                _this.favData.push(_this.localObj[obj]);
            }
            if (!_this.favData.length)
                _this.hasData = false;
            localStorage.setItem("favorite", JSON.stringify(_this.localObj));
            if (_this.keyS != 'default') {
                _this.favData = _this.sortByKey(_this.favData, _this.keyS, _this.ascS == "Ascending" ? true : false);
            }
        });
    }
    FavoriteL.prototype.ngOnInit = function () {
        this.goRight = false;
        var localData = localStorage.getItem("favorite");
        this.favData = [];
        this.localObj = JSON.parse(localData);
        for (var obj in this.localObj) {
            this.favData.push(this.localObj[obj]);
        }
        this.hasData = false;
    };
    FavoriteL.prototype.search = function (symbol) {
        this.Storage.getBasicInfo(symbol);
        this.Storage.slideTo('right');
    };
    FavoriteL.prototype.sortByKey = function (stocks, key, asc) {
        stocks = stocks.sort(function (a, b) {
            if (key != 'symbol') {
                a = a.quotes.USD;
                b = b.quotes.USD;
            }
            var x = a[key].toString().replace(/\,/g, "");
            var y = b[key].toString().replace(/\,/g, "");
            if (key != 'symbol') {
                x = parseFloat(x);
                y = parseFloat(y);
            }
            var ind = asc ? -1 : 1;
            return ((x < y) ? ind : ((x > y) ? -ind : 0));
        });
        return stocks;
    };
    FavoriteL.prototype.autoRe = function () {
        var _this = this;
        this.auto = 1 - this.auto;
        if (this.auto == 0) {
            clearInterval(this.interval);
        }
        else {
            this.interval = setInterval(function () {
                _this.Storage.refreshFavo();
            }, 5000);
        }
    };
    FavoriteL.prototype.ascChange = function (asc) {
        this.ascS = asc;
        if (this.keyS != 'default') {
            this.favData = this.sortByKey(this.favData, this.keyS, this.ascS == "Ascending" ? true : false);
        }
    };
    FavoriteL.prototype.keyChange = function (key) {
        this.keyS = this.match[key];
        if (this.keyS != 'default') {
            this.favData = this.sortByKey(this.favData, this.keyS, this.ascS == "Ascending" ? true : false);
        }
    };
    // DELETE
    FavoriteL.prototype.remStar = function (symbol) {
        this.Storage.remStar(symbol);
        this.Storage.remFavo(symbol);
    };
    FavoriteL.prototype.refreshFavo = function () {
        this.Storage.refreshFavo();
    };
    FavoriteL.prototype.slideR = function () {
        this.tabChange.emit();
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FavoriteL.prototype, "tabChange", void 0);
    FavoriteL = __decorate([
        core_1.Component({
            selector: 'favorite',
            template: __webpack_require__("../../../../../src/app/favorite.component.html"),
            styles: [__webpack_require__("../../../../../src/app/favorite.component.css")],
        }),
        __metadata("design:paramtypes", [storage_service_1.Storage])
    ], FavoriteL);
    return FavoriteL;
}());
exports.FavoriteL = FavoriteL;


/***/ }),

/***/ "../../../../../src/app/historical.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/historical.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%\">\r\n\t<div [hidden]=\"hisStatus!='wait'\" class=\"progress\" >\r\n\t\t<div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n\t</div>\r\n\t<div [hidden]=\"hisStatus!='ok'\" id=\"testHighchart\" style=\"width:100%\"></div>\r\n\t<div class=\"error-alert\" [hidden]=\"hisStatus!='fail'\">\r\n\t\t<div class=\"alert alert-danger\" role=\"alert\">\r\n\t\t\tError! Failed to get MACD data.\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/historical.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var HighchartsExporting = __webpack_require__("../../../../highcharts/modules/exporting.js");
var Highstock = __webpack_require__("../../../../highcharts/highstock.js");
HighchartsExporting(Highstock);
var storage_service_1 = __webpack_require__("../../../../../src/app/storage.service.ts");
var Historical = (function () {
    function Historical(Storage) {
        var _this = this;
        this.Storage = Storage;
        this.hisStatus = 'wait';
        this.clearSub = Storage.clearMsg$.subscribe(function (data) {
            _this.ngOnInit();
        });
        this.getHistory = Storage.historicalData$.subscribe(function (data) {
            if (!data || data["status"] == 'fail') {
                _this.hisStatus = 'fail';
                return;
            }
            var idx = 0;
            _this.historyD = data["data"];
            var hisHiChart = new Array();
            for (var i = _this.historyD.length - 1; i >= 0; i--) {
                var item = [_this.historyD[i][0], _this.historyD[i][2]];
                hisHiChart.push([_this.historyD[i][0], _this.historyD[i][2]]);
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
                tooltip: {
                    split: false
                }
            };
            if (hisChart) {
                Highstock.stockChart('testHighchart', hisChart);
                _this.hisStatus = 'ok';
            }
            else
                _this.hisStatus = 'fail';
        });
    }
    ;
    Historical.prototype.ngOnInit = function () {
        this.historySaved = new Object();
        this.historyD = new Object();
        this.hisStatus = 'wait';
    };
    Historical = __decorate([
        core_1.Component({
            selector: 'historical',
            template: __webpack_require__("../../../../../src/app/historical.component.html"),
            styles: [__webpack_require__("../../../../../src/app/historical.component.css")],
        }),
        __metadata("design:paramtypes", [storage_service_1.Storage])
    ], Historical);
    return Historical;
}());
exports.Historical = Historical;


/***/ }),

/***/ "../../../../../src/app/news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<div [hidden]=\"newsStatus != 'wait'\" class=\"progress\" id=\"newsInfo_progress\">\r\n\t<div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n\t</div>\r\n\t<div *ngIf=\"newsStatus=='ok'\">\r\n\t<div *ngFor=\"let news of newsData\">\r\n\t  <div [hidden]=\"newsStatus!='ok'\" style=\"background-color:lightgray;text-align:left;padding:20px;margin:10px;border-radius:6px\">\r\n\t\t<div>\t\r\n\t\t\t<p><a target=\"_blank\" href={{news.link}}>{{news.title}}</a></p>\r\n\t\t\t<div class=\"newsContent\" style=\"margin:20px 0 20px 0\">\r\n\t\t\t<p>Author:  {{news.author}}</p>\r\n\t\t\t<p>Date: {{news.pubDate}} </p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t</div>\r\n\t\t<div [hidden]=\"newsStatus!='wait'\" class=\"progress\">\r\n\t\t<div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n\t\t</div>\t\r\n\t\t\r\n\t\t</div>\r\n\t</div>\r\n\t</div>\r\n\t<div class=\"error-alert\" [hidden]=\"newsStatus!='fail'\">\r\n\t\t<div class=\"alert alert-danger\" role=\"alert\">\r\n\t\tError! Failed to get news data.\r\n\t\t</div>\r\n\t</div>\t\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/news.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var storage_service_1 = __webpack_require__("../../../../../src/app/storage.service.ts");
var News = (function () {
    function News(Storage) {
        var _this = this;
        this.Storage = Storage;
        this.newsStatus = 'wait';
        this.newsSub = Storage.stockNews$.subscribe(function (data) {
            if (!data || data[0] == "fail") {
                _this.newsStatus = 'fail';
                return;
            }
            _this.newsData = data;
            _this.newsStatus = 'ok';
        });
        this.clearSub = Storage.clearMsg$.subscribe(function (data) {
            _this.ngOnInit();
        });
    }
    News.prototype.ngOnInit = function () {
        this.newsData = [];
        this.newsStatus = 'wait';
    };
    News = __decorate([
        core_1.Component({
            selector: 'news',
            template: __webpack_require__("../../../../../src/app/news.component.html"),
            styles: [__webpack_require__("../../../../../src/app/news.component.css")],
        }),
        __metadata("design:paramtypes", [storage_service_1.Storage])
    ], News);
    return News;
}());
exports.News = News;


/***/ }),

/***/ "../../../../../src/app/storage.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var Storage = (function () {
    function Storage(http) {
        this.http = http;
        this.subject = new Subject_1.Subject();
        this.subjectAnnounce$ = this.subject.asObservable();
        this.stockIdx = new Subject_1.Subject();
        this.stockIdx$ = this.stockIdx.asObservable();
        //HISTORY
        this.historicalData = new Subject_1.Subject();
        this.historicalData$ = this.historicalData.asObservable();
        this.historicalApi = "http://angular2-env.92hivcqzt8.us-west-1.elasticbeanstalk.com/api/price?";
        //BASIC INFO
        this.stockBasic = new Subject_1.Subject();
        this.stockBasic$ = this.stockBasic.asObservable();
        this.basicInfoApi = "http://localhost:3000/api/info?";
        //INDEX	
        this.indData = new Object();
        this.indexData = new Subject_1.Subject();
        this.indexData$ = this.indexData.asObservable();
        this.indexApi = "http://angular2-env.92hivcqzt8.us-west-1.elasticbeanstalk.com/api/index?";
        this.idx = ["SMA", "EMA", "STOCH", "RSI", "ADX", "CCI", "BBANDS", "MACD"];
        //NEWS
        this.stockNews = new Subject_1.Subject();
        this.stockNews$ = this.stockNews.asObservable();
        this.newsApi = "http://angular2-env.92hivcqzt8.us-west-1.elasticbeanstalk.com/api/news?";
        //
        this.remstar = new Subject_1.Subject();
        this.remstar$ = this.remstar.asObservable();
        //slide change
        this.slide = new Subject_1.Subject();
        this.slide$ = this.slide.asObservable();
        //add favo
        this.newFavo = new Subject_1.Subject();
        this.newFavo$ = this.newFavo.asObservable();
        //remove favo
        this.delFavo = new Subject_1.Subject();
        this.delFavo$ = this.delFavo.asObservable();
        //CLEAR
        this.clearMsg = new Subject_1.Subject();
        this.clearMsg$ = this.clearMsg.asObservable();
        this.status = 0;
    }
    ;
    Storage.prototype.getHistoricalData = function (stock_name) {
        var _this = this;
        var params = new http_1.HttpParams().set('symbol', stock_name);
        this.http.get(this.historicalApi, { params: params }).subscribe(function (data) {
            _this.historicalData.next(data);
        });
    };
    Storage.prototype.getBasicInfo = function (stock_name) {
        var _this = this;
        var params = new http_1.HttpParams().set('symbol', stock_name);
        this.http.get(this.basicInfoApi, { params: params }).subscribe(function (data) {
            _this.stockBasic.next(data);
        });
    };
    Storage.prototype.getIndex = function (stock_name) {
        var _this = this;
        console.log("getIndex");
        var cnt = 0;
        for (var x in this.idx) {
            var params = new http_1.HttpParams().set('symbol', stock_name).set('ind', this.idx[x]);
            this.http.get(this.indexApi, { params: params }).subscribe(function (data) {
                cnt++;
                _this.setIdx(data);
            });
        }
    };
    Storage.prototype.getNews = function (stock_name) {
        var _this = this;
        var params = new http_1.HttpParams().set('symbol', stock_name);
        this.http.get(this.newsApi, { params: params }).subscribe(function (newsData) {
            _this.stockNews.next(newsData);
        });
    };
    Storage.prototype.remStar = function (symbol) {
        this.remstar.next(symbol);
    };
    Storage.prototype.slideTo = function (direct) {
        this.slide.next(direct);
    };
    Storage.prototype.addFavo = function (newData) {
        this.newFavo.next(newData);
    };
    Storage.prototype.remFavo = function (delData) {
        this.delFavo.next(delData);
    };
    Storage.prototype.setIdx = function (data) {
        this.indexData.next(data);
    };
    Storage.prototype.refreshFavo = function () {
        var _this = this;
        var localData = localStorage.getItem("favorite");
        var localObj = JSON.parse(localData);
        if (localObj == null) {
            return;
        }
        console.log(localData);
        var newObj = new Object();
        for (var obj in localObj) {
            var params = new http_1.HttpParams().set('symbol', localObj[obj]['symbol']);
            this.http.get(this.basicInfoApi, { params: params }).subscribe(function (data) {
                console.log(data);
                _this.addFavo(data);
            });
        }
    };
    Storage.prototype.clearAll = function () {
        this.status++;
        this.clearMsg.next(status);
    };
    Storage = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], Storage);
    return Storage;
}());
exports.Storage = Storage;


/***/ }),

/***/ "../../../../../src/app/tab.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".favo{  max-width: 1300px;  margin:auto}\r\n.info{  max-width: 1300px;  margin:auto}\r\n@media(max-width: 990px) {\r\n  .visable{\r\n    display:none;\r\n  }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tab.component.html":
/***/ (function(module, exports) {

module.exports = "<body style=\"margin:0\">\r\n  <div style=\"overflow: hidden;max-width:1280px;background-color:white;padding:12px;border-radius:6px\">\r\n\r\n    <div class=\"list-group\" div class=\"favo\" [@favo]=\"favo\">\r\n      <favorite (tabChange)=\"gor($event)\"></favorite>\r\n    </div>\r\n\r\n    <div class=\"list-group\" class=\"info\" [@info]=\"info\">\r\n      <detail (tabChange)=\"gol($event)\"></detail>\r\n    </div>\r\n\r\n  </div>\r\n</body>"

/***/ }),

/***/ "../../../../../src/app/tab.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var animations_1 = __webpack_require__("../../../animations/esm5/animations.js");
var storage_service_1 = __webpack_require__("../../../../../src/app/storage.service.ts");
var HighchartsExporting = __webpack_require__("../../../../highcharts/modules/exporting.js");
var Highstock = __webpack_require__("../../../../highcharts/highstock.js");
HighchartsExporting(Highstock);
var Tabs = (function () {
    function Tabs(Storage) {
        var _this = this;
        this.Storage = Storage;
        this.favo = 'left';
        this.info = 'left';
        this.slideSub = Storage.slide$.subscribe(function (data) {
            if (data == 'left') {
                if (_this.info == 'right')
                    _this.gol1();
            }
            if (data == 'right') {
                if (_this.info == 'left')
                    _this.gor1();
            }
        });
    }
    Tabs.prototype.goHist = function () {
    };
    Tabs.prototype.gol1 = function () {
        this.info = 'left';
        this.favo = 'left';
    };
    Tabs.prototype.gor1 = function () {
        this.favo = 'right';
        this.info = 'right';
    };
    Tabs.prototype.gol = function ($event) {
        this.info = 'left';
        this.favo = 'left';
    };
    Tabs.prototype.gor = function ($event) {
        this.favo = 'right';
        this.info = 'right';
    };
    Tabs = __decorate([
        core_1.Component({
            selector: 'tabs',
            template: __webpack_require__("../../../../../src/app/tab.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tab.component.css")],
            animations: [
                animations_1.trigger('favo', [
                    animations_1.state('left', animations_1.style({
                        'display': 'block',
                    })),
                    animations_1.state('right', animations_1.style({
                        'display': 'none'
                    })),
                    animations_1.transition('right => left', [
                        animations_1.style({ transform: 'translateX(150%)', }),
                        animations_1.animate(500)
                    ])
                ]),
                animations_1.trigger('info', [
                    animations_1.state('left', animations_1.style({
                        'display': 'none'
                    })),
                    animations_1.state('right', animations_1.style({
                        'display': 'block',
                    })),
                    animations_1.transition('left => right', [
                        animations_1.style({ transform: 'translateX(-150%)' }),
                        animations_1.animate(500)
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [storage_service_1.Storage])
    ], Tabs);
    return Tabs;
}());
exports.Tabs = Tabs;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map