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
