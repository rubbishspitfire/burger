   
   // Here is the ORM where you write functions that takes inputs and conditions
   // and turn them into database commands like SQL
    
   var connection = require("./connection");

   function printQuestionMarks(num) {
       var arr = [];

       for (var i = 0; i < num; i++) {
           arr.push("?");
       }

       return arr.toString();
   }

   function objToSql(ob) {
       var arr = [];

       for (var key in ob) {
           arr.push(key + "=" + ob[key]);
       }
       return arr.toString();
   }


    
   var orm = {
       all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    },
    // vals is an array of values that we want to save to cols
    // cols are the colums we want to insert the values into
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },
      // objColVols would be the colums and values that you want to update
      // an example of objColVals would be {name: panther, sleepy: true}
      update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
   };
   
   module.exports = orm;