var orm = require("../config/orm");

// Pass in query parameters as required by our ORM and also a callback to receive data
var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (burgerName, cb) {
        onm.insertOne("burgers", "burger_name", burgerName, function (res) {
             cb(res);
        });     
    },
    updateOne: function (burgerId, cb) {
        orm.updateOne("burgers", "devoured", 1, burgerId, function (res) {
            cb(res);
        });
    }
};


module.exports = burger;