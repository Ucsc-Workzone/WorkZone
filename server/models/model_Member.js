var dbconnection = require("../utils/index");
module.exports = {
  async getData(userid) {
    const array = [];
    try {
      const sqlGet1 = `SELECT COUNT(projects.projectId) as project_count from crud_contact.projects inner JOIn  crud_contact.team on projects.projectId=team.projectId inner join crud_contact.teamassign on team.teamId=teamassign.teamId where teamassign.memberId=${userid} and projects.completion !=100;`;
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
      const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${year}-${month}-${day}`;
     
      const sqlGet1 = `INSERT INTO workrecord (memberId,status,startDate) VALUES (${userid},0,'${currentDate}')`;
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
  async reportDutyCheck(userid){
    try{
      const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${year}-${month}-${day}`;
console.log(currentDate); // "17-6-2022"
sql=`SELECT * from workrecord where memberId=${userid} and startDate='${currentDate}' `;
const count= await dbconnection.query(sql);
 return count;
// if(count.length=0){
//   sql1=`INSERT INTO workrecord (memberId,status,startDate) VALUES (${userid},0,'${currentDate}') `
//   const count1= await dbconnection.query(sql1);
//   return count1;

// }

    }
    catch{
return "error"
    }
  }
  ,
  async reportTableFetch(userid) {
  
    try {
      
      const sqlGet1 = `SELECT * FROM  workrecord WHERE memberId=${userid} order by  startDate desc`;
      const count1 = await dbconnection.query(sqlGet1);
      return count1[0];
    
  
    } catch (err) {
      throw err;
    }
  },
};
