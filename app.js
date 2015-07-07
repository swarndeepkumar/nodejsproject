var http    = require('http');
http.createServer(function(req,res){
	console.log('Request Headers');
	console.log(req.headers);
	res.write('Hellow Client');
	res.end();
	
}).listen(3000,'localhost');
//http.get();
console.log('Server is running at localhost:3000');