var http    = require('http');
var express = require('express');
var app     = express();
/*http.createServer(function(req,res){
	res.end("yahooo");
}).listen(3000,'localhost');
*/
app.get('/home',function(req,res){
	res.send("I have got the get response");

});

console.log('Server is running at localhost:3000');