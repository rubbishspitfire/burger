  var mysql = require("mysql");
  var connection;

  connection = mysql.createConnection({
    host: process.env.DB_HOST || "192.168.99.101",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || "docker",
    database: process.env.DB_DATABASE || 'burgers_db'
}); 

   connection.connect(function(err) {
       if (err) {
           console.error("error connecting: " + err.stack);
           return;
       }
       console.log("connected as id " + connection.threadId);
   });

   module.exports = connection;