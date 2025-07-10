var express = require("express");
const { modata } = require("./data");
var router = express.Router();

router.get("/", function (req, res) {
    var obj = JSON.stringify(modata.getcars());
    res.send(obj);
});

module.exports = router;