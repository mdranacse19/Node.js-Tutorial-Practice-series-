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
        /*FS.writeFile('test.txt', 'welcome to node js platform', function (error) {
            if (error) {
                response.writeHead(404, {'Content-Type': 'text/html'})
                response.write("File write fail")
                response.end()
            }
            response.writeHead(404, {'Content-Type': 'text/html'})
            response.write("File write success")
            response.end()
        })*/
        //sync file write
        /*let fsError = FS.writeFileSync('test2.txt', 'welcome to node js platform 2');
        if (fsError){
            response.writeHead(404, {'Content-Type': 'text/html'})
            response.write("File write fail")
            response.end()
        }else{
            response.writeHead(404, {'Content-Type': 'text/html'})
            response.write("File write success")
            response.end()
        }*/

        // async file rename
        /*FS.rename('test.txt', 'test_rename.txt', function (error) {
            if (error){
                response.writeHead(404, {'Content-Type': 'text/html'})
                response.write("File rename fail")
                response.end()
            }else{
                response.writeHead(404, {'Content-Type': 'text/html'})
                response.write("File rename success")
                response.end()
            }
        })*/

        // async file delete
        /*FS.unlink('test2.txt', function (error) {
            if (error){
                response.writeHead(404, {'Content-Type': 'text/html'})
                response.write("File deleted fail")
                response.end()
            }else{
                response.writeHead(404, {'Content-Type': 'text/html'})
                response.write("File deleted success")
                response.end()
            }
        })*/

        // async file exist
        let fsExistResult = FS.existsSync('test_renamew.txt');
        if (fsExistResult){
            response.end('True')
        }else{
            response.end('False')
        }
    }
});
createServer.listen(8000);
console.log('server created successfully for FS');