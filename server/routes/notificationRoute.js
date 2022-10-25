const bycrypt = require("bcrypt");
const router = require("express").Router();
//const {createProject,createTeam, getorg,getProjectData,getmemberProjectList,saveCard,addtoWork,getProjectDataMember,updateCardMember}=require('../models/model_Project')

const{allnotification,notificationType,allAnnoucements,publishannoucements}=require('../models/model_Notification')
const {validToken}=require('./JWT')
const { db } = require("../utils/index");
const { verify } = require("crypto");

router.post("/allnotification", async (req,res) => {
 const data=await allnotification(req.body.userid)
 res.json(data)
});

router.post("/notificationType", async (req,res) => {
    const data=await notificationType(req.body)
    res.json(data[0])
   });






   //annoucements

   router.post("/allannoucements", async (req,res) => {
    const data=await allAnnoucements(req.body.notificationId,req.body.type)
    res.json(data[0])
   });

   router.post("/publishannoucements", async (req,res) => {
    const data=await publishannoucements(req.body)
    res.json(data)
   });


   
module.exports = router;
