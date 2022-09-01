const bycrypt = require("bcrypt");
const router = require("express").Router();
const { createToken, validToken } = require("../utils/JWT");
const {verifyuserRole,verifyuser}=require("../utils/authenticate")
const { db } = require("../utils/index");
const { getLeave } = require("../models/model_Leave");
const jwt_token = require("jwt-decode");
const { sendRegMail, sendforgetMail } = require("./Mail");

router.post("/getLeave", async (req, res) => {
  const userid = req.body["userid"];
  const token = req.body["accessToken"];
  const result = validToken(token);

  if (result) {
    const result = await getLeave(userid);
    res.json(result);
  } else {
    res.json("Verification Failed")
  }

});
router.post("/submitLeave", async (req, res) => {
  const { userid, type, member, reason, toDate, endDate } = req.body;

  // // const token=req.token;
  const sqlGet = `INSERT INTO leaverequest (memberId,description,fromDate,toDate,status,nodays,assignMember) VALUES (5,'sick','2022-08-26','2022-08-26','Pending',01,'H.R Herath') `;
  db.query(sqlGet, (error, result) => {
    if (error) {
      res.send(error);
    } else {
      //
      res.json(true);
    }
  });
});

router.post("/project", async (req, res) => {
  const accessToken=req.body['accessToken']


 const result=verifyuserRole(accessToken)
 res.json(result)
});

module.exports = router;
