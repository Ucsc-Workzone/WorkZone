var dbconnection = require("../utils/index");
module.exports = {
  
  async createProject(data) {
    try {
      const {center_id,project_name,description,start_date,estend_date,team}=data;
      sql = `INSERT INTO projects (centerId,projectName,description,startDate,estendDate,teamAssign) VALUES (${center_id},'${project_name}','${description}','${start_date}','${estend_date}',${team})`;
      const rows = await dbconnection.query(sql);

      return rows;
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
};
