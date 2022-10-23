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
      } else {
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

  async getorg(data) {
    const Sql = `SELECT * from org`;
    const rows = await dbconnection.query(Sql);
    if (rows) {
      return rows;
    } else {
      return "error";
    }
  },
  async getProjectData(data) {
    try {
      sql = `select * from projects , activity where projects.projectId=${data["project_id"]} and  activity.projectId=${data["project_id"]} `;
      const rows = await dbconnection.query(sql);
      return rows;
    } catch {
      return "error";
    }
  },
  async saveCard(data) {
    try {
      sql = `INSERT INTO activity (projectId,activityName,description) Values (${data["project_id"]},'${data["taskName"]}','${data["taskDes"]} ')`;
      const rows = await dbconnection.query(sql);
      return true;
    } catch {
      return "error";
    }
  },

  async getProjectDataMember(data) {
    try {
      //  sql = `select * from projects , activity,subactivity where projects.projectId=subactivity.projectId and subactivity.activityId=${data["activity_id"]} and acitivity.activityId=subactivity.activityId`;
      sql=`SELECT * from subactivity WHERE activityId=${data["activity_id"]}`
       const rows = await dbconnection.query(sql);
      return rows;
    } catch {
      return "error";
    }
  },
  async projectSummary(data) {
    try {
      //  sql = `select * from projects , activity,subactivity where projects.projectId=subactivity.projectId and subactivity.activityId=${data["activity_id"]} and acitivity.activityId=subactivity.activityId`;
      sql=`SELECT * FROM projects where projectId=${data}`;
       const rows = await dbconnection.query(sql);
      return rows;
    } catch {
      return "error";
    }
  },
  
};
