var dbconnection = require("../utils/index");
module.exports = {
  async getLeave(userid) {
    console.log(userid);
    const array = [];
    const arrayCard = [];
    const d = new Date();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    console.log("month", year);
    try {
      const sqlGet1 = `SELECT count(leaveId) as pendingcount from leaverequest where memberId=${userid} and status='Pending' `;
      const row1 = await dbconnection.query(sqlGet1);
      arrayCard.push(row1[0][0]);

      const sqlGet2 = `SELECT count(leaveId) as monthCount from leaverequest where Month(fromDate)=${month} and status='Accepted' `;
      const row2 = await dbconnection.query(sqlGet2);
      arrayCard.push(row2[0][0]);

      const sqlGet3 = `SELECT count(leaveId) from leaverequest as yearCount where Month(fromDate)=${year} and status='Accepted' `;
      const row3 = await dbconnection.query(sqlGet2);
      arrayCard.push(row3[0][0]);

      array.push(arrayCard);
      const sqlGet = `SELECT * from leaverequest WHERE memberId= ${userid}`;
      const rows = await dbconnection.query(sqlGet);

      if (rows.length == 0) {
        return "No pending Leaves";
      } else {
        const result = rows[0];
        array.push(result);
        return array;
      }
    } catch (err) {
      throw err;
    }
  },
  async requestLeave(req) {
    const { userid, type, member, reason, toDate, endDate } = req.body;
  

    const sqlGet = `INSERT INTO leaverequest (memberId,description,fromDate,toDate,status,nodays,assignMember) VALUES (${userid},'${reason}','${toDate}','${endDate}','Pending',${'1'},'${member}') `;
     const row1 = await dbconnection.query(sqlGet);
  if(row1){
    return "Suceessfully requested a your leave ";
  }
  else{
    return " Something went wrong ,please try again later";
  }

  },
};
