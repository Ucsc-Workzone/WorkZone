var dbconnection = require("../utils/index");
module.exports = {
  
  async allnotification(data) {
    try {
    
    
      sql = `SELECT * From notification,user_notification,user where  notification.to=${data}  and notification.from=user.userid and user_notification.notificationId=notification.notificationId`;
      const rows = await dbconnection.query(sql);

      return rows[0];
    } catch (err) {
      throw err;
    }
  },
  async notificationType(id,type) {
    try {
  
      switch (type) {
        case 'm-005':
          sql=`SELECT * from notification,projects where  notification.notificationId=${id} and notification.projectId=projects.projectId `;
          const rows = await dbconnection.query(sql);
          return rows;

        break;
     
        // case 'B': document.write("Pretty good<br />");
        // break;
     
        // case 'C': document.write("Passed<br />");
        // break;
     
        // case 'D': document.write("Not so good<br />");
        // break;
     
        // case 'F': document.write("Failed<br />");
        // break;
     
        default:  return 0;
     }
      return rows[0];
    } catch (err) {
      throw err;
    }
  },






  //all Annocemnts
  async allAnnoucements(){
    try{
sql='SELECT * FROM annoucements order by date desc';
const rows = await dbconnection.query(sql);
return rows;

    }
    catch{

    }
  },
  async publishannoucements(data){
    try{
      let currentDate = new Date().toJSON().slice(0, 10);
      let time = new Date().toJSON()
// sql=`INSERT INTO annoucements (from,to,content,title) VALUES ('${data['from']}','all','${data['description']}','${data['title']}') `;
// const rows = await dbconnection.query(sql);
return data;
    }

    catch(error){
return error;
    }
  }
}
