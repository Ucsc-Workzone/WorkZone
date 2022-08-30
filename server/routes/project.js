const bycrypt = require("bcrypt");
const router = require("express").Router();
const {createProject}=require('../models/model_Project')

router.post("/create", async (req, res) => {
 
  const result=createProject(req.body)
  console.log(result)
  res.json(result)
  
});

router.post("/project", async (req, res) => {
  res.json("jelelel");
});

module.exports = router;
