var dbconnection = require("../utils/index");
module.exports = {
  
  async createProject(username) {
    try {
      sql = "SELECT * FROM user";
      const rows = await dbconnection.query(sql);

      return rows[0];
    } catch (err) {
      throw err;
    }
  },
  async createTeam(data) {
    const TeamList=data;
    try {
      // sql = "SELECT * FROM user";
      // const rows = await dbconnection.query(sql);

      return TeamList;
  
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
};
