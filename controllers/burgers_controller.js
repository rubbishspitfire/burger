var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

// GET request for database contents
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
           var hbsObject =  { 
               burgers: data 
            };

            res.render("index", hbsObject);
    });
});

// POST request adds a burger to the database
router.post("/", function (req, res) {
        console.log(req.body.burger_name);
        if(req.body.burger_name !=="") {
            burger.insertOne(req.body.burger_name.trim(), function () {
                res.redirect("/");
            });
        }
});

// PUT request to update a burger's status
router.put("/:id", function (req, res) {
        console.log(req.params.id);

        burger.updateOne(req.params.id, function() {
            res.redirect("/");
        });
})


module.exports = router;