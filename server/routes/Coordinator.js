const bycrypt = require("bcrypt");
const router = require("express").Router();
const {validToken}=require('./JWT')
const {getData,getProjects, dutyReport,checkDuty}=require('../models/model_Coordinator')
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


module.exports = router;
