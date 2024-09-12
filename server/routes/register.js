const bycrypt = require("bcrypt");
const router = require("express").Router();
const {createProject,createTeam}=require('../models/model_Project')
const {validToken}=require('./JWT')
const { db } = require("../utils/index");
const { verify } = require("crypto");

router.post("/registeruser", async (req,res,next) => {
 
//    const result=await createProject(req.body)

  res.json('result')
});





module.exports = router;
