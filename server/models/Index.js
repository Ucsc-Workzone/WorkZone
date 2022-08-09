const mysql=require("mysql2");
let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'crud_contact'
});
db.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

  module.exports={db}