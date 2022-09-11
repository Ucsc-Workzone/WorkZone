const bycrypt = require("bcrypt");
const router = require("express").Router();
// const {validToken}=require('./JWT')
// const {getData,getProjects, dutyReport,checkDuty}=require('../models/model_Member')
const jwt_token = require("jwt-decode");
const { db } = require("../utils/index");

router.post("/getdata", async (req,res) => {
res.json("ALl notifications")
  
});


module.exports = router;
