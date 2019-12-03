var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;
var app = express();

// Serve static content for the app from the public folder
app.use(express.static("public"));

// Parse application by using x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extened: false}));
// Parse application for json
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine" , "handlebars");

var router = require("./controller/burgerController.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("Listening on port:%s" + PORT);
});

