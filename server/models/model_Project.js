var dbconnection = require("../utils/index");
module.exports = {
  async createProject(data) {
    try {
      var start_date = new Date().toISOString().slice(0, 10);
      const { center_id, project_name, description, estend_date, team } = data;
      sql = `INSERT INTO projects (centerId,projectName,description,startDate,estendDate,teamAssign) VALUES (${center_id},'${project_name}','${description}','${start_date}','${estend_date}',${team})`;
      const rows = await dbconnection.query(sql);
      const query = `SELECT LAST_INSERT_ID();`;
      const rows1 = await dbconnection.query(query);
      return rows1[0][0];
      // if (rows) {
      //   const query = `SELECT LAST_INSERT_ID();`;
      //   const rows1 = await dbconnection.query(query);
      //   return rows1[0][0];
      // } else {
      //   return false;
      // }
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
      sql = `select * from projects , activity where projects.projectId=${data['project_id']} and activity.projectId=${data['project_id']}`;
      const rows = await dbconnection.query(sql);
      
      return rows;
    } catch {
      return "error";
    }
  },
  async saveCard(data) {
    try {
      const date = new Date();

      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      
      // This arrangement can be altered based on how we want the date's format to appear.
      let currentDate = `${year}-${month}-${day}`;
      sql = `INSERT INTO activity (projectId,activityName,description,memberId,weight,startDate,endDate) Values (${data["project_id"]},'${data["taskName"]}','${data["description"]}',${data['member']},'${data['weight']}','${currentDate}','${data['estend']}')`;
      const rows = await dbconnection.query(sql);
      return true;
    } catch {
      return "error";
    }
  },

  async getProjectDataMember(data) {
    try {
      //  sql = `select * from projects , activity,subactivity where projects.projectId=subactivity.projectId and subactivity.activityId=${data["activity_id"]} and acitivity.activityId=subactivity.activityId`;
      sql = `SELECT * from subactivity WHERE activityId=${data["activity_id"]}`;
      const rows = await dbconnection.query(sql);
      return rows;
    } catch {
      return "error";
    }
  },

  async updateCardMember(data) {
    try {
      for (let i = 0; i < data.length; i++) {
        sql = `UPDATE subactivity SET project_stage = ${data[i]["project_stage"]} WHERE subActivityId=${data[i]["subActivityId"]};`;
        const rows = await dbconnection.query(sql);
      }

      if (rows) {
        return true;
      } else {
        return "tt";
      }
    } catch {
      return "hh";
    }
  },

  async addtoWork(data) {
    try {
      sql = `UPDATE subactivity SET project_stage = 4 WHERE subActivityId=${data};`;
      const rows = await dbconnection.query(sql);
      return rows;
    } catch {
      return "error";
    }
  },
  async getmemberProjectList(data) {
    try {
      sql = `SELECT * FROM activity,projects where activity.memberId=${data} and projects.projectId=activity.projectId and activity.complete=1 and projects.completion=0`;
      const rows = await dbconnection.query(sql);
      return rows;
    } catch {
      return "error";
    }
  },
  async getworkreportData(data) {
    try {
      sql = `SELECT * FROM activity,projects where activity.memberId=${data} and projects.projectId=activity.projectId and activity.complete=0 and projects.completion=0`;
      const rows = await dbconnection.query(sql);
      return rows;
    } catch {
      return "error";
    }
  },

  async saveCardMember(data) {
    try {
      sql=`INSERT INTO subactivity (activityId,projectId,subActName,weight,project_stage,description) VALUES (${data['activity_id']},${data['project_id']},'${data['taskName']}','${data['weight']}',1,'${data['taskDes']}')`;

      const rows = await dbconnection.query(sql);

      return rows;
    } catch {
      return "error";
    }
  },
  async getCoordinatorCards(data) {
    try {
      sql = `select * from projects where centerId=1 and completion=0 order by estendDate asc;`;
      const rows = await dbconnection.query(sql);

      return rows;
    } catch {
      return "error";
    }
  },
  async getsummarymember(data) {
    try {
      sql1 = `SELECT * FROM projects,activity where projects.projectId=${data["project_id"]} and activity.activityId=${data["activity_id"]} limit 1`;
      const rows = await dbconnection.query(sql1);

      return rows[0];
    } catch {
      return "error";
    }
  },

  async getsummarycoordinator(data){
    try {
      sql1=`SELECT * FROM projects where projectId=${data['project_id']} `;
      const rows = await dbconnection.query(sql1);
      
               
      return rows[0];
    } catch {
      return "error";
    }
  },
  

  async checkpendings(data) {
    try {

      const date = new Date();

      let day = date.getDate()-1;
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let currentDate = `${year}-${month}-${day}`;
      sql = `SELECT * FROM workrecord where memberId=${data} and status=1 and startDate='${currentDate}'`;
      const rows = await dbconnection.query(sql);

      return rows[0].length;
    } catch {
      return "error"
    }
  },
  async getworkreportmember(data) {
    try {
      sql = `SELECT * FROM workrecord,subactivity,reportActivity where workrecord.memberId=${data} and workrecord.status=1 and reportActivity.subActivityId=subactivity.subActivityId `;
      const rows = await dbconnection.query(sql);

      return rows[0];
    } catch {
      return "error"
    }
  },

  async createReport(data){
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;
    try{
sql=`SELECT * FROM workreport where memberId=${data} and fromDate='${currentDate}'`;
const rows = await dbconnection.query(sql);
if(!rows){
return "Mamama"
}

else{
  return "yyyyy"
}

return "Kkkkk"
    }

    catch{

    }

  }
};
