'use strict';


const mysql = require('mysql');
const donenv = require('dotenv');
donenv.config();
//local mysql db connection

const dbConn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


dbConn.connect( err => {
    if (err) throw err;
    console.log("Database Connected!");
});

module.exports = dbConn;