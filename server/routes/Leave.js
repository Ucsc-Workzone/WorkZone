const bycrypt = require("bcrypt");
const router = require("express").Router();
const { createToken, validToken } = require("./JWT");
const {verifyuserRole,verifyuser}=require("../utils/authenticate")
const { db } = require("../utils/index");
const { getLeave,requestLeave, configLeave, isConfig } = require("../models/model_Leave");
const jwt_token = require("jwt-decode");

router.post("/leaveConfig", async (req, res) => {
  const { annual, weekly, sick, maternity, mercantile } = req.body;

  const result=await configLeave(req);

  res.json(result)

});

router.post("/isLeaveConfig", async (req, res) => {
  const { idLeaveConfig } = req.body;


   const result=await isConfig(req)
 
  res.json(result)
});

router.post("/getLeave", async (req, res) => {
  const userid = parseInt(req.body["userId"]);
  const token = req.body["accessToken"];
  console.log("userid",userid,req.body)
  const result = validToken(token);

  // if (result) {
    const status = await getLeave(userid);
  //   res.json(result);
  // } else {
  //   res.json('userid')
  // }
  res.json(status)

});
router.post("/submitLeave", async (req, res) => {
  const { userid, type, member, reason, toDate, endDate } = req.body;

  // // const token=req.token;
   const result=await requestLeave(req)
  //   if (error) {
  //     res.send(error);
  //   } else {
  //     //
  //     res.json(true);
  //   }
  // });
  //const result=await createProject(req.body)
  res.json(result)
});

router.post("/project", async (req, res) => {
  const accessToken=req.body['accessToken']


 const result=verifyuserRole(accessToken)
 res.json(result)
});

module.exports = router;
