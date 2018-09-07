const express = require('express');
const router = express.Router();
const request = require('request');
const http = require('http');
const compression = require('compression');
const fs = require('fs');
const schedule = require("node-schedule");

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('empty api');
});

router.use(function(req, res, next) 
{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const CoinMarketCapApi="https://api.coinmarketcap.com/v2/ticker/";
const CoinMarketCapListApi= "https://api.coinmarketcap.com/v2/listings/";
const Convert = ["USD"];
const ToLocaleString = ["volume_24h", "market_cap"];
const PercentChange = ["percent_change_1h", "percent_change_24h", "percent_change_7d"];
var startId = [1, 233, 659, 1070, 1343, 1552, 1714, 1843, 1983, 2100, 2235, 2350, 2458, 2560, 2664, 2767, 2916, 2916, 3019];

var mapping = readMap();

function readMap(){
	return JSON.parse(fs.readFileSync('./server/symbol_id_mapping.txt', 'utf8'));
}

/*Info*/
router.get('/info', (req, res) => {
	const symbol = req.query.symbol.toUpperCase();
	
	if (mapping[symbol] == null){
		updateMappingFile();
		var error = genError(1);
		res.send(error);
		return;
	}
	
	const symbolId = mapping[symbol];
	for (i = 0; i <= 18; i++) {
		queryMarcketCap(i, symbol, res);
	}
});

function updateStartId(){
	for (i = 1; i <= 18; i++) {
		queryStartId(i);
	}
}

function queryStartId(idx) {
	var options = {
		url: CoinMarketCapApi,
		qs:{
			sort: 'id',
			limit: 100,
			start: (idx*100+1).toString(),
		},
		method: 'GET'
	};
	request(options, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body).data;
			for (var key in data) {
				startId[idx] = key;
				break;
			}
		}
	});		

}

function queryMarcketCap(idx, symbol, res){
	var options = {
		url: CoinMarketCapApi,
		qs:{
			sort: 'id',
			limit: 100,
			start: (idx*100+1).toString(),
		},
		method: 'GET'
	};
	
	request(options, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = (JSON.parse(body)).data[mapping[symbol]];
			if (data){
				for (i = 0, convertLen = Convert.length; i < convertLen; i++) {
					for (j = 0, toLocaletLen = ToLocaleString.length; j < toLocaletLen; j++) {
						data["quotes"][Convert[i]][ToLocaleString[j]] = parseFloat(data["quotes"][Convert[i]][ToLocaleString[j]]).toLocaleString();
					}
					for (j = 0, percentLen = PercentChange.length; j < percentLen; j++) {
						if (data["quotes"][Convert[i]][PercentChange[j]] != null) {
							data["quotes"][Convert[i]][PercentChange[j]] = data["quotes"][Convert[i]][PercentChange[j]].toString() + '%';
						}
					}
				}
				res.send(data);
			}
			else{
				return;
			}
		}
	});	
}

function genError(code){
	var error = new Object();
	error["status"] = "fail";
	error["errorCode"] = code;
	return error;
}

function updateMappingFile() {
  	var options = {
		url: CoinMarketCapListApi,
		method: 'GET'
	};
	request(options, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			let mappingArray = {};
			var data = (JSON.parse(body)).data;
			for (i = 0, dataLength = data.length; i < dataLength; i++){
				mappingArray[data[i].symbol] = data[i].id;
			}
			fs.writeFileSync('./server/symbol_id_mapping.txt',JSON.stringify(mappingArray));
			mapping = readMap();
		}
	});	
}

var ruleCoinList  = new schedule.RecurrenceRule();
var timesCoinList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
ruleCoinList.hour  = timesCoinList; ruleCoinList.minute = 0;
schedule.scheduleJob(ruleCoinList, function() {
	updateMappingFile();
});

module.exports = router;