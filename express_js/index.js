const express = require('express');
const fs = require('fs');
const HTTP = require('http');
const bodyParser = require('body-parser')
const multer  = require('multer')
const multerObj = multer()


const app = express();
//for body json
app.use(bodyParser.json())
//for form data - use for only form data
//app.use(multerObj.array())
//app.use(express.static('public'))

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


//FOR REQUEST QUERY
app.get('/request_query', function (request, response) {

    let firstName = request.query.firstName;
    let lastName = request.query.lastName;
    response.status(200).end('This is request_query. And the name is '+firstName+' '+lastName)
})
//request_header
app.get('/request_header', function (request, response) {

    let firstName = request.header('firstName');
    let lastName = request.header('lastName');
    let userAgent = request.header('User-Agent');
    response.status(200).end('This is request_header(get request). And the name is '+firstName+' '+lastName+' And UserAgent is '+userAgent)
})
//post_request
app.post('/post_request', function (request, response) {

    let firstName = request.query.firstName;
    let lastName = request.query.lastName;
    response.status(200).end('This is request_query. And the name is '+firstName+' '+lastName)
})
//json_request
app.post('/json_request', function (request, response) {
    let jsonData = request.body;
    let jsonString = JSON.stringify(jsonData);
    let post = jsonData.post
    let village = jsonData['village']
    response.status(200).send(jsonString+' ---------- '+post+' ---------- '+village)
})
//form_data_request
app.post('/form_data_request', function (request, response) {
    let jsonData = request.body;
    let jsonString = JSON.stringify(jsonData);
    response.status(200).send(jsonString)
})
//file_upload_request
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './my-uploads')
    },
    filename:function (req, file, callback) {
        callback(null, new Date().getSeconds()+'-'+file.originalname)
    }
})
var upload = multer({storage:storage}).single('myFile');

app.post('/file_upload_request', function (request, response) {
    upload(request, response, function (error) {
        if (error){
            response.status(400).send('File upload fail!!' + error)
        } else {
            response.status(200).send('File upload success!!')
        }
    })
})





app.listen(1111, function () {
    console.log("Express run successfully!");
})



