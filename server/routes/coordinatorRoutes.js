const bycrypt = require("bcrypt");
const router = require("express").Router();

const {getCarddata,getLeave,getLeavetable,getLeavetableall,getLeavesummary,getTable,getCarddataW,getStaff}=require('../models/model_coordinator')

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


 router.post("/getLeavetableall", async (req,res,next) => {
 
  const result=await getLeavetableall(req.body)

 res.json(result)
});
router.post("/leavesummary", async (req,res) => {
 
  const result=await getLeavesummary(req.body)

 res.json(result)
});
router.post("/staff", async (req,res) => {
 
  const result=await getStaff(req.body)

 res.json(result)
});


router.post("/getcardDataWR", async (req, res) => {
  const status = await getCarddataW(req.body);
  res.json(status);
}),

router.post("/getTable", async (req, res) => {
  const status = await getTable(req.body);
  res.json(status);
}),
module.exports = router;
