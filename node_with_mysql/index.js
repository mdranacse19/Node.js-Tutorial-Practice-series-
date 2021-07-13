const mysql = require('mysql');

const dbConfig = { host: 'localhost',user: 'root',password: '',database: 'node_with_mysql' }

const connectDB = mysql.createConnection(dbConfig);

connectDB.connect(function (error) {
    if (error){
        console.log('connection failed! '+error)
    }else{
        console.log('connection success!')
        insertData(connectDB)
    }

})

//for insert data
function insertData(conn) {
    let sqlQuery = "INSERT INTO student_list(name, role, address, class, date) VALUES ('rana',10,'mirpur 1, dhaka',12,'2021-07-13')";
    conn.query(sqlQuery, function (error) {
        if(error) console.log("Query execute failed! " +error)
        console.log("Query execute success! ")
    })
}