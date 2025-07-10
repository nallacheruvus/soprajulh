var app = require("express")();
var bodyParser = require("body-parser");
var crouter = require("./router");
var rrouter = require("./regrouter");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/datacar", crouter);
app.use("/datareg", rrouter);
app.listen(3000, () => {
    console.log("Service is up");
});

