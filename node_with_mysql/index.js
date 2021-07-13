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
        console.log('connection success!')
    }

})