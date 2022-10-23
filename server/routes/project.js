const bycrypt = require("bcrypt");
const router = require("express").Router();
const {createProject,createTeam, getorg,getProjectData,saveCard,projectSummary,getProjectDataMember}=require('../models/model_Project')
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

router.post("/projectSummary",async(req,res)=>{
  const staus=await projectSummary(req.body.project_id);
  res.json(staus[0])
})




module.exports = router;
