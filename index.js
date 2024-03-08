const mysql = require('mysql2');
const express = require('express');
const app = express();

// create a new MySQL connection
const connection = mysql.createConnection({
    host: 'roundhouse.proxy.rlwy.net',
    user: 'root',
    password: 'tIIDmSgxVwjpNFByMAMGrhvMQBmlPWTX',
    database: 'railway'
});
// connect to the MySQL database
connection.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL database:', error);
    } else {
        console.log('Connected to MySQL database!');
    }
});

// close the MySQL connection
app.get('/', function (req, res) {
    res.send('<h1>hello world</h1>');
});
app.listen(5000, function () {
    console.log("Express App running at http://127.0.0.1:5000/");
})

// connection.end();