var http	= require('http');
var fs		= require('fs');
function send404(req,res){
	res.writeHead(404,{'Content-Type':'text/html'});
	res.write('Resouse could not found:404: '+req.url);
	res.end();

}
http.createServer(function(req,res){
	if(req.method=='GET' && req.url == '/home'){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write("How are you: "+ req.url);
	}else{
		send404(req,res);
	}
	res.end();
}).listen(3000,'localhost');