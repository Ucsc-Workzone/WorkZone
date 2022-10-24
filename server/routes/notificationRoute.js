const bycrypt = require("bcrypt");
const router = require("express").Router();
//const {createProject,createTeam, getorg,getProjectData,getmemberProjectList,saveCard,addtoWork,getProjectDataMember,updateCardMember}=require('../models/model_Project')

const{allnotification,notificationType}=require('../models/model_Notification')
const {validToken}=require('./JWT')
const { db } = require("../utils/index");
const { verify } = require("crypto");

router.post("/allnotification", async (req,res) => {
 const data=await allnotification(req.body.userid)
 res.json(data)
});

router.post("/notificationType", async (req,res) => {
    const data=await notificationType(req.body.notificationId,req.body.type)
    res.json(data[0])
   });

 

module.exports = router;
