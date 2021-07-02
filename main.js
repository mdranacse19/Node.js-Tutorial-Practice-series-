const http = require('http');

var serverCreate = http.createServer(function (request, response) {
    if (request.url == '/'){
        response.writeHead(200, {'Content-type':'text/html'});
        response.write("<h2>This is home page</h2>");
        response.end();

    } else if (request.url == '/about'){
        response.writeHead(200, {'Content-type':'text/html'});
        response.write("<h2>This is about page</h2>");
        response.end();

    } else if (request.url == '/contact'){
        response.writeHead(200, {'Content-type':'text/html'});
        response.write("<h2>This is contact page</h2>");
        response.end();

    }
})
serverCreate.listen(1111);
console.log('server created successfully');