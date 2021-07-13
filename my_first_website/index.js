const http = require('http');
const fs = require('fs');

const createServer = http.createServer(function (req, res) {
    if(req.url == '/'){
        let data = fs.readFileSync('html/home.html', 'utf8')
        res.end(data)

    } else if(req.url == '/about'){
        let data = fs.readFileSync('html/about.html', 'utf8')
        res.end(data)

    } else if(req.url == '/teams'){
        let data = fs.readFileSync('html/teams.html', 'utf8')
        res.end(data)

    } else if(req.url == '/contact'){
        let data = fs.readFileSync('html/contact.html', 'utf8')
        res.end(data)

    } else {
        res.write('NO PAGE FOUND!')
        res.end()
    }
});
createServer.listen(1111);
console.log('Server create successfully!')