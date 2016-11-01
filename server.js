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

const testData = [
	{	title: "song1", artist: "artist1", uri: "uri1", votes: 0 },
	{	title: "song2", artist: "artist2", uri: "uri2", votes: 0 },
	{	title: "song3", artist: "artist3", uri: "uri3", votes: 0 },
	{	title: "song4", artist: "artist4", uri: "uri4", votes: 0 },
];

app.post('/playlist/add', (req, res) => {
	console.log(req.body);
	res.send({ playlist: testData })
});

app.get('/playlist/songs', (req, res) => {
	res.send({ playlist: testData })
});

app.post('/playlist/vote', (req, res) => {
	console.log(req.body);
	res.send({ playlist: testData })
});

let data = {}

app.post('/data/modify', (req, res) => {
	data = Object.assign({}, data, req.body);
	res.sendStatus(200)
})

app.get('/data/all', (req, res) => {
	res.send(data)
})


