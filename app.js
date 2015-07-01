var http = require('http');
http.createServer(function(req,res){
	res.end("yahooo");
}).listen(3000,'localhost');
console.log('Server is running at localhost:3000');