var dbconnection = require("../utils/index");
module.exports = {
  async getCarddata(data) {
    data=[];
    try {
     sql=`select count(recordId) as count from workrecord where status=1 `
     const rows = await dbconnection.query(sql);

     
    

     
     return rows[0];
      } 
     catch (err) {
    
    }
  },
  async getTable(data) {
   
    try {
     sql=`select * FROM workrecord where status=1 `;
     const rows = await dbconnection.query(sql);

     
    

     
     return rows[0];
      } 
     catch (err) {
    
    }
  },

  
  
};
