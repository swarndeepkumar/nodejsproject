var express = require('express');
var timeout = require('connect-timeout');
var app		= express()
				.use('/api',
					function(req, res, next){
					// Simulate a hanging request by doing nothing
						console.log("First Call back");
						res.end("Response End Successfully");
					}
					)
				.listen(3000);