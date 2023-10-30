// Create web server 
// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received.");
	if (pathname == '/hello') {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.end("Hello World!");
	} else if (pathname == '/goodbye') {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.end("Goodbye World!");
	} else {
		response.writeHead(404, {"Content-Type": "text/html"});
		response.end("404 Not Found");
	}
});


