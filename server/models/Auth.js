// const { db } = require('../models/Index');
const mysql=require("mysql2");
const jwt_token = require("jwt-decode");
const bycrypt = require("bcrypt");
const { createToken, validToken } = require("../routes/JWT");
let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'crud_contact'
});
class Auth {
  static login(username, password) {
    const sql = `SELECT * FROM user where username='${username}'`;
    db.query(sql, function (err, result) {
        if (err) throw err;
    
        else{
          
        return 1;
        }
      });
  }
}
module.exports = Auth;
