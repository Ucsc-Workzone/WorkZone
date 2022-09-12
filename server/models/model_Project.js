var dbconnection = require("../utils/index");
module.exports = {

  async createProject(data) {
    try {
      var start_date = new Date().toISOString().slice(0, 10);
      const { center_id, project_name, description, estend_date, team } = data;
      sql = `INSERT INTO projects (centerId,projectName,description,startDate,estendDate,teamAssign) VALUES (${center_id},'${project_name}','${description}','${start_date}','${estend_date}',${team})`;
      const rows = await dbconnection.query(sql);

      if (rows) {
        const query = `SELECT LAST_INSERT_ID();`;
        const rows1 = await dbconnection.query(query);
        return rows1[0][0];
      }
      else {
        return false;
      }
    } catch (err) {
      throw err;
    }
  },
  async createTeam(data) {
    const TeamList = data;
    try {
      // sql = "SELECT * FROM user";
      // const rows = await dbconnection.query(sql);

      return TeamList;

    } catch (err) {
      throw err;
    }
  },

  async gethistory(userid) {
    return userid;
  },

  async getorg(data){
return "Malithi"
  }
};
