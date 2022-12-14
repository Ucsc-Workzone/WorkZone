var dbconnection = require("../utils/index");
module.exports = {
  async getCarddata(data) {
    data = [];
    try {
      sql = `SELECT COUNT(userid) as memberCount
     FROM user
     WHERE userRole='member' `;
      const rows = await dbconnection.query(sql);

      data.push(rows[0]);

      sql1 = `SELECT COUNT(projectId) as projectCount
     FROM projects
     WHERE completion=0 `;
      const rows1 = await dbconnection.query(sql1);
      data.push(rows1[0]);
      sql2 = `SELECT COUNT(projectId) as projectCountf
     FROM projects
     WHERE completion=1 `;
      const rows2 = await dbconnection.query(sql2);
      data.push(rows2[0]);
      return data;
    } catch (err) {}
  },
  async getLeave() {
    try {
      sql = `SELECT COUNT(leaveId) as leaveCount FROM leaverequest WHERE status='pending'`;
       const row=await dbconnection.query(sql);

      return row[0];
    }
    catch(err){}    
   },
   async getLeavetable(){
    try{
      sql=`select * from leaverequest,user where status="pending" and leaverequest.memberId=user.userid ORDER BY leaverequest.fromDate desc limit 3;`;
      const row=await dbconnection.query(sql);
      
      return row[0];
    }
    catch(err){
      return "error";
    }
   },
   async getLeavetableall(){
    try{
    sql=`select * from leaverequest,user where leaverequest.memberId=user.userid ORDER BY leaverequest.fromDate desc;`;
    const row=await dbconnection.query(sql);

    return row[0];
  }catch(err){
    return "error";
  }
  },
   async getLeavesummary(){
    try{
      data=[];
      
      sql=`select count(leaveId) as leavepending from leaverequest where Month(fromDate)=10 and status='Pending'`;
      const row=await dbconnection.query(sql);
      data.push(row[0]);

      sql1=`select count(leaveId) as leaveAccept from leaverequest where Month(fromDate)=10 and status='Accepted'`;
      const row1=await dbconnection.query(sql1);
      data.push(row1[0]);

      sql2=`select count(leaveId) as leaveRejected from leaverequest where Month(fromDate)=10 and status='Rejected'`;
      const row2=await dbconnection.query(sql2);
      data.push(row2[0]);
      
      return data;

    }catch{
        
    }
  },
   async getStaff(){
    try{
    sql=`SELECT * FROM user where userRole='member'`;
    const row2=await dbconnection.query(sql);
return row2[0];
    }
    catch{
    return "error";
    }
   },
   async getStaffPart(){
    try{
    sql=`SELECT * FROM partial_signup`;
    const row2=await dbconnection.query(sql);
      return row2[0];
    }
    catch{
      return "error";
    }
   },

    async getCarddataW(data) {

    data = [];
    try {
      sql = `select count(recordId) as count from workrecord where status=1 `;
      const rows = await dbconnection.query(sql);


      return rows[0];
    } catch (err) {}
  },
  async getTable(data) {
    try {
      sql = `select * FROM workrecord ,user where workrecord.status=1 and user.userid=workrecord.memberId `;
      const rows = await dbconnection.query(sql);

      return rows[0];
    } catch (err) {}
  },
  async getProjectHistory(){
    try{
    sql=`SELECT * FROM crud_contact.projects WHERE completion='1';`;
    const row2=await dbconnection.query(sql);

    return row2[0];
    }catch{
      return "error";
    }
   },
   async getWRHistroy(){
    try{
    sql=`SELECT * FROM crud_contact.workrecord,crud_contact.user  WHERE workrecord.status='1' OR workrecord.status='2' OR workrecord.status='3' AND user.userid=workrecord.memberId;`;
    const row2=await dbconnection.query(sql);

    return row2[0];
    }catch{
      return "error";
    }
   },
   async seeRecord(data){
    try{
    sql=`select * from workrecord,reportActivity,subactivity where workrecord.recordId=reportActivity.reportId and subactivity.subActivityId=reportActivity.subActivityId and workrecord.recordId=${data}`;
    const row2=await dbconnection.query(sql);

    return row2[0];
    }catch{
      return "error";
    }
   },
   async acceptLeaveRequest(data){
    try{
    sql=`UPDATE leaverequest SET status='Accepted' where leaveId=${data}`;
    const row2=await dbconnection.query(sql);

    return row2[0];
    }catch{
      return "error";
    }
   },
   async rejectLeaveRequest(data){
    try{
    sql=`UPDATE leaverequest SET status='Rejected' where leaveId=${data}`;
    const row2=await dbconnection.query(sql);

    return row2[0];
    }catch{
      return "error";
    }
   },
   
   
};
