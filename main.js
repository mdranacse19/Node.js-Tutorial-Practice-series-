const HTTP = require('http');
const URL = require('url');

var serverCreate = HTTP.createServer(function (request, response) {

    let setUrl = "https://www.youtube.com/watch?v=JWnpfkA6V2A&list=PLkyGuIcLcmx2qXaZkjCL8-P78i2J5rDOa&index=9";
    let parseUrl = URL.parse(setUrl, true);

    response.writeHead(200, {'Content-Type': 'text/html'})
    response.write(parseUrl.host +'<br>');
    response.write(parseUrl.pathname +'<br>');
    response.write(parseUrl.search +'<br>');
    response.write(parseUrl.query.list +'<br>');
    response.end()

})
serverCreate.listen(1111);
console.log('server created successfully');