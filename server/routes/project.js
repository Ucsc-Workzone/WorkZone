const bycrypt = require("bcrypt");
const router = require("express").Router();
const {createProject,createTeam}=require('../models/model_Project')
const {validToken}=require('./JWT')
const { db } = require("../utils/index");

router.post("/create", async (req,res,next) => {
 
   const result=await createProject(req.body)

  res.json(result)
});

router.post("/project", async (req, res) => {
  res.json("jelelel");
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

module.exports = router;
