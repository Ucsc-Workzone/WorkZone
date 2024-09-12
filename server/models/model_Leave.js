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
  async configLeave(data) {
    const center_id = data['center_id'];
    const annual = data['annual'];
    const weekly = data['weekly'];
    const sick = data['sick'];
    const maternity = data['maternity'];
    const mercantile = data['mercantile'];


    try{
      const sqlGet = `UPDATE leave_config SET annual='${annual}', weekly='${weekly}', sick='${sick}', maternity='${maternity}', mercantile='${mercantile}' WHERE idLeaveConfig='${center_id}' ;`
      console.log
      const row1 = await dbconnection.query(sqlGet);
      
       return '1';
      }catch{
        return '2';
      }

  },
  async isConfig(req) {
    const { idLeaveConfig } = req.body;

    const sqlGet = `SELECT leaveconfig FROM org WHERE orgcode='${idLeaveConfig}'`;

    const configquery = await dbconnection.query(sqlGet);

  if(configquery){
    if(configquery != 0){ 
      return 1;
    }
    else{
      return 0;
    }
  }
  else{
    return 3;
  }
  },
  async getConfig(data) {
    const idLeaveConfig = data['center_id'];

    try{
      sqlGet = `SELECT * FROM crud_contact.leave_config Where idLeaveConfig = '${idLeaveConfig}'`;
      // console.log(sqlGet);

      const configfindq = await dbconnection.query(sqlGet);
  
      return configfindq[0];
      }catch{
        return "error";
      }
  },
};
