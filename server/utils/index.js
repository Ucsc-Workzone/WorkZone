// const mysql = require("mysql2");

// let pool = mysql.createPool({
//   connectionLimit: 100,
//   host: "localhost",
//   user: "root",
//   password: "1234",
//   database: "crud_contact",
// });

// module.exports=pool;
var mysql = require("mysql2/promise");

// // connect to the db
// dbConnectionInfo = {
//   host: "localhost",
//   port: "3306",
//   user: "root",
//   password: "1234",
//   connectionLimit: 5, //mysql connection pool length
//   database: "crud_contact"
// };

// connect to the db
dbConnectionInfo = {
  host: "workzone.c6yaihe9lzwl.us-west-2.rds.amazonaws.com",
  port: "3306",
  user: "workzone",
  password: "qwer1234",
  connectionLimit: 5, //mysql connection pool length
  database: "crud_contact"
};



//create mysql connection pool
var dbconnection = mysql.createPool(dbConnectionInfo);

// Attempt to catch disconnects
dbconnection.on("connection", function (connection) {
  console.log("DB Connection established");

  connection.on("error", function (err) {
    console.error(new Date(), "MySQL error", err.code);
  });
  connection.on("close", function (err) {
    console.error(new Date(), "MySQL close", err);
  });
});

module.exports = dbconnection;
