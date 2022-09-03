var dbconnection = require("../utils/index");
module.exports = {
  
  async createProject(username) {
    try {
      sql = "SELECT * FROM user";
      const rows = await dbconnection.query(sql);

      return rows[0];
    } catch (err) {
      throw err;
    }
  },
  async createTeam(data,id) {
    const TeamList=data;
    try {
      
for(i=0;i<data.length;i++){
 sql = `INSERT INTO teamassign values(${id},${data[i]})`;
  const rows = await dbconnection.query(sql);
}
    return 'sucess';
    } catch (err) {
      throw err;
    }
  },

  async areValidCredentials(username, password) {
    try {
      conn = await pool.getConnection();
      sql = "SELECT pass FROM USERS WHERE username = ?";
      const rows = await conn.query(sql, username);
      conn.end();

      if (rows.length == 1 && rows[0].pass === password) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      throw err;
    }
  },
};
