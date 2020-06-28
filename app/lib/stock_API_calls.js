const mongoose  = require("mongoose"),
      request   = require('request'),      
      setup     = require("../../config/setup.js");

// Connect to database
mongoose.connect(setup.database);
require('../models/Stock');
const Stock = mongoose.model("Stock");

//Example request to build 1 model at a time from a get request
var url = "https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=1&from=1572651390&to=1572910590&token=brsamqfrh5ranontie7g";
request(url, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  var stock = new Stock();
  stock.candle_close_price = body.c;
  stock.candle_timestamps = body.t;
  stock.candle_open_price = body.o;
  stock.candle_high_price = body.h;
  stock.candle_low_price = body.l;
  stock.candle_volume_data = body.v;

  console.log("model = " + stock);

});


//var url = "https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=1&from=1572651390&to=1572910590&token=brsamqfrh5ranontie7g";
// o
// List of open prices for returned candles.
// h
// List of high prices for returned candles.
// l
// List of low prices for returned candles.
// c
// List of close prices for returned candles.
// v
// List of volume data for returned candles.
// t
// List of timestamp for returned candles.
// s
// Status of the response. This field can either be ok or no_data.