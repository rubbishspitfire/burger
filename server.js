var express = require("express");
var bodyParser = require("body-parser");

// Express setup
var app = express();
var PORT = process.env.PORT || 3306;

// Serve static content for the app from the "public" directory in the application directory
app.use(express.static("public"));

// Parse application body as a JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./controllers/burgers_controller");

app.use(routes);

// Start server
  app.listen(PORT, function() {
    console.log("Listening on PORT" + PORT);
});