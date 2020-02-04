var express = require("express");

var router = express.Router();

// Import this model (burger.js) to use its database functions.
var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    // express callback response by calling burger.selectAllBurger
    burger.selectAll(function(burgerData) {
        // wrapper for orm.js that using MYSQL query callback will return burger_data, render to index with handlebar
        res.render("index", { burger_data: burgerData});
    });
});

// post route back to index
router.post("/burgers/create", function(req, res) {
    // takes the request object using it as input for burger.addBurger
    burger.create(req.body.burger_name, function(result) {
        // wrapper for orm.js that using MySQL insert callback will return a log to console
        // render back to index with handle
        console.log(result);
        res.redirect("/");
    });
});

// put route back to index
router.put("/burger/:id", function(req, res) {
    burger.updateOne(req.params.id, function(result) {
        // wrapper for orm.js that using MySQL update callback will return a log to console
        // render back to index with handle
        console.log(result);
        // Send back response and let page reload from .then in Ajax
        res.sendStatus(200);
    });
});

module.exports = router;