var express = require('express');
var app = express();
var port = process.env.PORT || 1337;
var request = require('request');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

app.listen(port, console.log(`server listening on ${port}`));
