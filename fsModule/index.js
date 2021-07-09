const FS = require('fs');
const HTTP = require('http');

const createServer = HTTP.createServer(function (request, response) {
    if(request.url == "/"){
        //async file read
        /*FS.readFile('Home.html', function (error, data) {
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(data);
            response.end();
        })*/
        //sync
        /*let myData = FS.readFileSync('Home.html');
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write(myData);
        response.end();*/

        //async file write
        FS.writeFile('test.txt', 'welcome to node js platform 2', function (error) {
            if (error) {
                response.writeHead(404, {'Content-Type': 'text/html'})
                response.write("File write fail")
                response.end()
            }
            response.writeHead(404, {'Content-Type': 'text/html'})
            response.write("File write success")
            response.end()
        })
    }
});
createServer.listen(8000);
console.log('server created successfully for FS');