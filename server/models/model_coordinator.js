var dbconnection = require("../utils/index");
module.exports = {
  async getCarddata(data) {
    data=[];
    try {
     sql=`SELECT COUNT(userid) as memberCount
     FROM user
     WHERE userRole='member' `
     const rows = await dbconnection.query(sql);

     
     data.push(rows[0])

     sql1=`SELECT COUNT(projectId) as projectCount
     FROM projects
     WHERE completion=0 `
     const rows1 = await dbconnection.query(sql1);
     data.push(rows1[0])
     sql2=`SELECT COUNT(projectId) as projectCountf
     FROM projects
     WHERE completion=1 `
     const rows2 = await dbconnection.query(sql2);
     data.push(rows2[0])
     return data;
      } 
     catch (err) {
    
    }
  },
   async getLeave(){
    try{
sql=`SELECT COUNT(leaveId) as leaveCount
FROM leaverequest
WHERE status='pending'`;
const row=await dbconnection.query(sql);
return row[0];
    }
    catch{

    }
   },
   async getLeavetable(){
    try{
sql=`select * from leaverequest,user where status="pending" and leaverequest.memberId=user.userid ORDER BY leaverequest.fromDate desc limit 3;`;
const row=await dbconnection.query(sql);
return row[0];
    }
    catch{
return "error";
    }
   },
   async getLeavetableall(){
    try{
sql=`select * from leaverequest,user where status="pending" and leaverequest.memberId=user.userid ORDER BY leaverequest.fromDate ;`;
const row=await dbconnection.query(sql);
return row[0];
    }
    catch{
return "error";
    }
   }
   ,
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
    }
    catch{
return "error";
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
   }
   

  
};
