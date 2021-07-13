const mysql = require('mysql');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
}

const connectDB = mysql.createConnection(dbConfig);

connectDB.connect(function (error) {
    if (error){
        console.log('connection failed! '+error)
    }else{
        connectDB.query("create database node_with_mysql", function (error, result) {
            if(error) console.log('database created failed! '+error)
            console.log('database created success!')
        })
        console.log('connection success!')
    }

})