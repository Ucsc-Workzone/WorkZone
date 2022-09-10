var dbconnection = require("../utils/index");
module.exports = {
  async getData(userid) {
    const array = [];
    try {
      const sqlGet1 = `SELECT COUNT(user.userId) as member_count from crud_contact.users WHERE user.userRole='member';`;
      const count1 = await dbconnection.query(sqlGet1);
      array.push(count1[0][0]);

      const sqlGet2 = `SELECT count(leaveId) as leavecount FROM crud_contact.leaverequest where status='Pending' and memberId=${userid} ;`;
      const count2 = await dbconnection.query(sqlGet2);
      array.push(count2[0][0]);
      
      return array;
    } catch (err) {
      throw err;
    }
  },
  async getProjects(userid) {
    const array = [];
    try {
      const sqlGet1 = `SELECT projects.projectId,projects.projectName,projects.estendDate from crud_contact.projects inner JOIn  crud_contact.team on projects.projectId=team.projectId inner join crud_contact.teamassign on team.teamId=teamassign.teamId where teamassign.memberId=5 and projects.completion !=100;`;
      const count1 = await dbconnection.query(sqlGet1);
      array.push(count1[0]);

      return array;
    } catch (err) {
      throw err;
    }
  },
  async dutyReport(userid) {
    const array = [];
    try {
      var todayDate = new Date().toISOString().slice(0, 10);
      console.log(todayDate);
      const sqlGet1 = `INSERT INTO workrecord (memberId,status,startDate) VALUES (${userid},0,'${todayDate}')`;
      const count1 = await dbconnection.query(sqlGet1);
    
if(count1){
  return true;
}
     
    } catch (err) {
      throw err;
    }
  },
  async checkDuty(userid) {
    const array = [];
    try {
      var todayDate = new Date().toISOString().slice(0, 10);
      console.log(todayDate);
      const sqlGet1 = `SELECT * FROM  workrecord WHERE memberId=${userid} AND startDate='${todayDate}' and status='0'`;
      const count1 = await dbconnection.query(sqlGet1);
    
if(count1.length!=0){
  return true;
}
   else{
    return false;
   }  
    } catch (err) {
      throw err;
    }
  },
  
};
