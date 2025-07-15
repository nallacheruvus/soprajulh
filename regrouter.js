var express = require("express");
var router = express.Router();
var mysql = require("mysql");

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'sopradb'
});

router.get("/", function (req, res) {
    con.query("select * from register", (e, r, f) => {
        if (e) {
            console.log(e.stack);
        }
        res.json(r);
        r.forEach(element => {
            for (const nam of ["id","name","email","mobile"]) {
                console.log(element[nam]);
                console.log("*".repeat(50));
            }
        });
    });
});

router.get("/ins/:id/:name/:email/:mobile", function (req, res) {
    con.query("insert into register values ("+req.params.id+",'"+req.params.name+"','"+req.params.email+"','"+req.params.mobile+"')", (e, r, f) => {
        if (e) {
            console.log(e.stack);
        }
        res.json(r);
        // r.forEach(element => {
        //     for (const nam of ["id","name","email","mobile"]) {
        //         console.log(element[nam]);
        //         console.log("*".repeat(50));
        //     }
        // });
    });
});

module.exports = router;