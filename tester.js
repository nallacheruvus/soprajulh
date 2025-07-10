var express = require("express");
var app = express();
var mysql = require("mysql");

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'sopradb'
});

app.get("/", function (req, res) {
  con.query("select * from register", (e, r, f) => {
        res.json(r);
    });
}).listen(3000);