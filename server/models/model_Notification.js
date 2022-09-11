var dbconnection = require("../utils/index");
module.exports = {
  
  async getnotification(data) {
    try {
        const {userid,type,category}=data;
    
    //   sql = `INSERT INTO projects (centerId,projectName,description,startDate,estendDate,teamAssign) VALUES (${center_id},'${project_name}','${description}','${start_date}','${estend_date}',${team})`;
    //   const rows = await dbconnection.query(sql);

      return userid;
    } catch (err) {
      throw err;
    }
  },
}
