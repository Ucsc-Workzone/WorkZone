const bycrypt = require("bcrypt");
const router = require("express").Router();

const {createProject,createTeam, getorg,getProjectData,deleteActivity,getsummarymember,getsummarycoordinator,getmemberProjectList,getCoordinatorCards,saveCardMember,saveCard,addtoWork,getProjectDataMember,updateCardMember,getworkreportmember}=require('../models/model_Project')

const {validToken}=require('./JWT')
const { db } = require("../utils/index");
const { verify } = require("crypto");

router.post("/create", async (req,res,next) => {
 
   const result=await createProject(req.body)

  res.json(result)
});

router.post("/workreportget", async (req, res) => {
  const token=req.body['accessToken'];
  res.json(token)
});

router.post("/createteam",async(req,res)=>{
  const accessToken=req.body['accessToken'];
  const team=req.body['TeamList']
  const result=validToken(accessToken)
if(result){
const status=createTeam(team)
  res.json(status)
}
else{
  res.json("Invalid user")
}
});


router.post("/getorg",async(req,res)=>{
//   const accessToken=req.body['accessToken'];
//   const team=req.body['TeamList']
//   const result=validToken(accessToken)
// if(result){
 const status= await getorg();
res.json(status[0]);
//   res.json(status)
// }
// else{
//   res.json("Invalid user")
// }
});

router.post("/getProjectData",async(req,res)=>{
   const staus=await getProjectData(req.body);
  res.json(staus[0])
})

router.post("/saveCard",async(req,res)=>{
  const staus=await saveCard(req.body);
 res.json(staus)
})

router.post("/membergetCards",async(req,res)=>{
  const staus=await getProjectDataMember(req.body);
  res.json(staus[0])
})


router.post("/updateCards",async(req,res)=>{
   const staus=await updateCardMember(req.body['updatedProjects']);
  res.json(staus)
})

router.post("/addworkReport",async(req,res)=>{
 const staus=await addtoWork(req.body.subacitivityId);
  res.json(staus)
})


router.post("/getmemberProjectDetails",async(req,res)=>{
  const status=await getmemberProjectList(req.body.userid);
   res.json(status[0])
 })
 


 |

 router.post("/saveCardMember",async(req,res)=>{
  const status=await saveCardMember(req.body);
   res.json(status)
 })
 router.post("/getCoordinatorCards",async(req,res)=>{
  const status=await getCoordinatorCards(req.body);
   res.json(status[0])
 })
 router.post("/getsummarymember",async(req,res)=>{
  const status=await getsummarymember(req.body);
   res.json(status)
 })




 router.post("/getsummarycoordinator",async(req,res)=>{
  const status=await getsummarycoordinator(req.body);
   res.json(status)
 })
 

 //workreport
 router.post("/getworkreports",async(req,res)=>{
  const status=await getmemberProjectList(req.body.userid);
   res.json(status[0])
 })

 //workreport
 router.post("/checkpendings",async(req,res)=>{
  const status=await checkpendings(req.body.userid);
   res.json(status)
 })
 router.post("/getworkreportmember",async(req,res)=>{
  const status=await getworkreportmember(req.body.userid);
   res.json(status)
 })
 router.post("/createReport",async(req,res)=>{
  const status=await createReport(req.body.userid);
   res.json(status)
 })

 router.post("/deleteActivity",async(req,res)=>{
  const status=await deleteActivity(req.body.sunActId);
   res.json(status)
 })

 
 
module.exports = router;
