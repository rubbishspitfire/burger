var orm = require("../config/orm");

// Pass in query parameters as required by our ORM and also a callback to receive data
var burger = {
    all: function (cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(name, cb) {
        onm.create("burgers", [
            "burger_name", "devoured"
        ], [
            name, false
        ], cb);
    },
    update: function (id, cb) {
        var condition = "id=" + id;
        orm.update("burgers", {
            "devoured": true
        }, condition, cb);
    }
}; 


module.exports = burger;