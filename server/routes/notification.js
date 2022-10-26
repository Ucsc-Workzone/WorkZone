const bycrypt = require("bcrypt");
const router = require("express").Router();
const {validToken}=require('./JWT')
const { db } = require("../utils/index");
const { verify } = require("crypto");

router.post("/create", async (req,res,next) => {
 
 

  res.json("result")
});

module.exports = router;
