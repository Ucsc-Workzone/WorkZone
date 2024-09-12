const bycrypt = require("bcrypt");
const router = require("express").Router();
const {validToken}=require('./JWT')
const {getData,getProjects, dutyReport,checkDuty,reportDutyCheck,reportTableFetch}=require('../models/model_Member')
const jwt_token = require("jwt-decode");
const { db } = require("../utils/index");

router.post("/getData", async (req,res,next) => {
 const data=req.body['accessToken'];
 const result=validToken(data)
 if(result){
    const decoded = jwt_token(data);
    const userId=decoded['userid'];
    const result=await getData(userId);
    res.json(result)
 }
 else{
    res.json('invalid user')
 }
  
});


router.post('/projectList',async(req,res,next)=>{
    const data=req.body['accessToken'];
 const result=validToken(data)
 if(result){
    const decoded = jwt_token(data);
    const userId=decoded['userid'];
    const result=await getProjects(userId);
    res.json(result)
 }
 else{
    res.json('invalid user')
 }
  

});
router.post('/dutyreport',async(req,res,next)=>{
   const data=req.body['accessToken'];
const result=validToken(data)
if(result){
   const decoded = jwt_token(data);
   const userId=decoded['userid'];
   const result=await dutyReport(userId);
   res.json(result)
}
else{
   res.json('invalid user')
}
 

});
router.post('/checkduty',async(req,res,next)=>{
   const data=req.body['accessToken'];
const result=validToken(data)
if(result){
   const decoded = jwt_token(data);
   const userId=decoded['userid'];
   const result=await checkDuty(userId);
   res.json(result)
}
else{
   res.json('invalid user')
}
 

});

router.post("/createtodo", (req, res) => {
   const title = req.body.title;
   const desc = req.body.desc;
   const date = req.body.date;
  res.json(title)
 
  
 });
 
router.post("/reportDutyCheck", async(req, res) => {
const userid=req.body.userid;
const status=await reportDutyCheck(userid);
res.json(status)

 
 
  
 });
 router.post("/reportTableFetch", async(req, res) => {
   const userid=req.body.userId;
   const status=await reportTableFetch(userid);
   res.json(status)
   
    
    
     
    });
 
module.exports = router;
