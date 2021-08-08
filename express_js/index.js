const express = require('express');
app = express();
const fs = require('fs');

const HTTP = require('http');

//text response
app.get('/one', function (request, response) {
    response.send('This is simple text response')
})
//code response
app.post('/one', function (request, response) {
    response.status('400').end('This is code response')
})
//json response
app.put('/one', function (request, response) {

    let jsonArray = [
        {type:"Fiat", model:"500", color:"white"},
        {type2:"Fiat2", model2:"5002", color2:"white2"}
    ];
    response.json(jsonArray)
})
//download response
app.get('/download', function (request, response) {
    response.download('test.txt')
})
//redirect response
app.get('/redirect_previous_url', function (request, response) {
    response.redirect('/redirect_after_url')
})
app.get('/redirect_after_url', function (request, response) {
    response.send('welcome to redirect URL')
})
//header response
app.get('/header_response', function (request, response) {
    response.append('title', 'MD.')
    response.append('middle_name', 'Rakib')
    response.append('clan', 'Uddin')
    response.append('nick_name', 'Rana')
    response.send('successfully run header response')
    response.status('200').end()
})
//cookie response
app.get('/cookie_response', function (request, response) {
    response.cookie('title', 'MD.')
    response.cookie('middle_name', 'Rakib')
    response.cookie('clan', 'Uddin')
    response.cookie('nick_name', 'Rana')
    response.send('successfully run cookie response')
    response.status('200').end()
})
//cookie response clear
app.get('/cookie_response_clear', function (request, response) {
    response.clearCookie('title')
    response.clearCookie('middle_name')
    response.cookie('clan', 'Uddin')
    response.cookie('nick_name', 'Rana')
    response.send('successfully run cookie clear response')
    response.status('200').end()
})




app.listen(1111, function () {
    console.log("Express run successfully!");
})



