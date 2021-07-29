/*
var a = 10;
var b = 20;
var c = 30;
var d = 40;

var ab = a+b;
var cd = c+d;

var result = cd-ab;

console.log(result);
*/

let axios = require('axios');

let URL = "https://restcountries.eu/rest/v2/all";
axios.get(URL)
    .then(function (response) {
        console.log(response.status)
        console.log(response.data)
    })
    .catch(function (errors) {
        console.log({errors})
    })
