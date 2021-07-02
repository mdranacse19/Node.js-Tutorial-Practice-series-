const http = require('http');

var serverCreate = http.createServer(function (request, response) {
    response.end('I love programming');
})
serverCreate.listen(1111);
console.log('server created successfully');