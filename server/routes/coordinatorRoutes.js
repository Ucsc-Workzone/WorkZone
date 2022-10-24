const bycrypt = require("bcrypt");
const router = require("express").Router();
const {getCarddata,getLeave,getLeavetable}=require('../models/model_coordinator')
const {validToken}=require('./JWT')
const { db } = require("../utils/index");
const { verify } = require("crypto");

router.post("/getCoordinatorCards", async (req,res,next) => {
 
   const result=await getCarddata(req.body)

  res.json(result)
});

router.post("/getLeave", async (req,res,next) => {
 
    const result=await getLeave(req.body)
 
   res.json(result)
 });


 router.post("/getLeavetable", async (req,res,next) => {
 
    const result=await getLeavetable(req.body)
 
   res.json(result)
 });
module.exports = router;
