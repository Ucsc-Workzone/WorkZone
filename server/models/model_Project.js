const { db } = require("./Index");

//   const createProject=(data) {
//     const { project_name, start_date, estend_date, team } = data;
//     const insert = `INSERT INTO projects(projectId,centerId,projectName) VALUES (25,1,'dev');`;
//     // const insert=`INSERT INTO projects('centerId', 'projectName', 'description', 'startDate', 'estendDate', 'date', 'teamAssign')
//     // VALUES (1,'dev','des','2022.01.01','2022.01.01','2022.01.01','1')`;

//     return(db.query(insert, function (error, results, fields) {
//       if (error) {
//         throw error;
//       }

//       const imgFromId = results;

//       console.log(imgFromId);
//     }))
//   }
  const createProject=((req,res,next)=>{
      // const { project_name, start_date, estend_date, team } = data;
    const insert = `SELECT * FROM user`;
    // const insert=`INSERT INTO projects('centerId', 'projectName', 'description', 'startDate', 'estendDate', 'date', 'teamAssign')
    // VALUES (1,'dev','des','2022.01.01','2022.01.01','2022.01.01','1')`;

   db.query(insert, function (error, results, fields) {
      if (error) {
        throw error;
      }

      const imgFromId = results;

      console.log(imgFromId);
      return res.se(imgFromId);
    });
   return 'malalal'
})
module.exports={createProject}