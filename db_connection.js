var mysql = require('mysql');
var express = require('express');
var config = require('../../config.js')
var app = express()
var path = require('path');

var con = mysql.createConnection({
	host: config.database.host,
	user: config.database.user,
	password: config.database.password
});

/*app.use('./', function (req, res) {
	//res.cookie('This is a response form the server via cookies', './', {domain: 'tylerjames.xyz/backend', path './index.html', secure: false});
	res.send('This is a response from the server')
})*/

app.get('/test', function(req,res){
	res.send("This is a response from Node");
});

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000,function(){
  console.log("Started on PORT 3000");
})
//con.connect(function(err) {
//	if (err) throw err;
//	console.log("Connected!");
//});
