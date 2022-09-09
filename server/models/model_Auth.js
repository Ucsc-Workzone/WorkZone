var dbconnection = require("../utils/index");
const bycrypt = require("bcrypt");
const { createToken, validToken } = require("../utils/JWT");
module.exports = {
  async login(username, password) {
    try {
      const sqlGet = `SELECT * FROM user where username='${username}'`;
      const rows = await dbconnection.query(sqlGet);

      if (rows.length == 0) {
        return "user Doesent exists";
      } else {
        const result = rows[0][0];
        return result;
      }
    } catch (err) {
      throw err;
    }
  },
  async list() {
    try {
      conn = await pool.getConnection();
      sql = "SELECT id,username,email,role FROM USERS";
      const rows = await conn.query(sql);
      conn.end();
      return rows;
    } catch (err) {
      throw err;
    }
  },

  async areValidCredentials(username, password) {
    try {
      conn = await pool.getConnection();
      sql = "SELECT pass FROM USERS WHERE username = ?";
      const rows = await conn.query(sql, username);
      conn.end();

      if (rows.length == 1 && rows[0].pass === password) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      throw err;
    }
  },

  async signUpUser(req) {
    var todayDate = new Date().toISOString().slice(0, 10);
   
    try {
      const { firstrName, lastName, username, address, image, dob, org } = req;
      const sqlGet = `INSERT INTO user (username,userRole,joinDate,firstrname,lastName,image) VALUES ('${username}','member','${todayDate}','${firstrName}','${lastName}','${image}')`;
      const rows = await dbconnection.query(sqlGet);
    
      return rows;
    } catch(err) {
      return  err;
    }
  },
};
