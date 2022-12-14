const bycrypt = require("bcrypt");
const router = require("express").Router();
const { createToken, validToken } = require("../utils/JWT");
const {verifyuserRole,verifyuser}=require("../utils/authenticate")
const { db } = require("../utils/index");
const {getCarddata}=require('../models/model_workreports')
const jwt_token = require("jwt-decode");
const { sendRegMail, sendforgetMail } = require("./Mail");


router.post("/getworkreports", async (req, res) => {
  
    router.post("/gethistory",async(req,res)=>{
        const accessToken=req.body['accessToken'];
        const result=validToken(accessToken);
        
        if(result){
          const status=await gethistory()
        }
        else{
          res.json(accessToken);
        }
        
      }),
      
//  const result=verifyuserRole(accessToken)
 res.json('result')
});


router.post("/getcardData", async (req, res) => {
  const status = await getCarddata(req.body);
  res.json(status);
}),

router.post("/getTable", async (req, res) => {
  const status = await getTable(req.body);
  res.json(status);
}),
module.exports = router;
