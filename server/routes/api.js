const express = require('express');
const router = express.Router();
const request = require('request');
const http = require('http');
const compression = require('compression');
const fs = require('fs');

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
var mapping = JSON.parse(fs.readFileSync('./server/symbol_id_mapping.txt', 'utf8'));
/*Info*/
router.get('/info', (req, res) => {
	const symbol = req.query.symbol.toUpperCase();
	if (mapping[symbol] == null){
		return;
	}

	for (i = 0; i <= 18; i++){
		queryMarcketCap(i, symbol, res);
	}
});

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
			var data = (JSON.parse(body).data)[mapping[symbol]];
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
		}
	});	
}

module.exports = router;