const express = require('express');
app = express();
var mysql2 = require('mysql2');

var con = mysql2.createConnection({
 host: "localhost",
 user: "root",
 password: "root",
database: "akronym"
});
con.connect((err)=> {
if (err) throw err;
console.log("Connected!")
});


module.exports = con;