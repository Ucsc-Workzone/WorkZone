var dbconnection = require("../utils/index");
module.exports = {
  async getLeave(userid) {
    try {
        const sqlGet = `SELECT * from leaverequest WHERE ${userid}`;
        const rows = await dbconnection.query(sqlGet);
  
        if (rows.length == 0) {
          return "No pending Leaves";
        } else {
          const result = rows[0];
          return result;
        }
      } 
      catch (err) {
        throw err;
      }
  },
};
