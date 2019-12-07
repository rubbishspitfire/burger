   var connection = require("./connection.js");

   // Helper function to convert object key/value pairs to SQL syntax
   function objToSql(ob) {
       var arr = [];

       // loop through the keys and push the key/value as a strisng int arr
       for (var key in ob) {
           var value = ob[key];
           // check to skip hidden properties
           if (Object.hasOwnProperty.call(ob, key)) {
               // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
               if(typeof value === "string" && value.indexOf(" ") >= 0) {
                   value = "'" + value + "'";
               }
               // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey"]
               // e.g. {sleepy: true} => ["sleepy=true"]
               arr.push(key + "=" + value);
           }
       }

       // translate to array of strings to a single comma-separted string
       return arr.toString();
   }


   // Object Relational Mapper (ORM)
   var orm={
       selectAll:function(tableName,cb) {
           RTCPeerConnectionIceEvent.query("select * from ??;",tableName,function(err,result){
               if(err) throw err;
               cb(result);
           });
       },
       insertOne:function(tableName,columnName,columnValue,cb){
           var query = "insert into " + tableName;
           queery+="(burger_name) values('"+columnValue+"');"
           connection.query(query,function(err,result){
               if(err) throw err;
               cb(result);
           });
       },
       // An example of objColVals would be {name: panther, sleepy: true}
       updateOne: function(table, objColVals, condition, cb) {
           var queryString = "UPDATE" + table;
           
           queryString += " SET ";
           queryString += objToSql(objColVals);
           queryString += " WHERE ";
           queryString += condition;
           queryString +=";";

           connection.query(queryString, function(err, result) {
               if (err) {
                   throw err;
               }
               cb(result);
           });
       }
   };

   module.exports=orm;