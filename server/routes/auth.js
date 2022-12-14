const bycrypt = require("bcrypt");
const router = require("express").Router();
const { createToken, validToken } = require("./JWT");
const { db } = require("../utils/index");
const jwt_token = require("jwt-decode");
const { sendRegMail, sendforgetMail ,sendRegMailOrg} = require("./Mail");

const { login, signUpUser,registerorg } = require("../models/model_Auth");
const { getnotification } = require("../models/model_Notification");

router.post("/login", async (req, res) => {

  const username = req.body.username;
  const password = req.body.password;
  const result = await login(username, password);

  bycrypt.compare(password, result["password"]).then((match) => {
    if (!match) {
      res.json({ error: "Invalid Credentials" });
    } else {
      const accessToken = createToken(result);
      res.cookie("access-Token", accessToken, {
        maxAge: 60 * 60 * 24 * 1000 * 30,
      });
      const { password, ...others } = result;
      res.json({ ...others, accessToken });
    }
  });

  //
});

// })

router.post('/registerorg',async (req,res)=>{

const status=await registerorg(req.body.email,req.body.orgName,req.body.des);
//  res.json(status) ;
  if(status){
   const state= sendRegMailOrg(req.body.email)
   res.json(true)
  }

  else{
    res.json("MMm")
  }
  // catch(err){
  //   res.json("malithu")
  // }
  
 
  })

router.post("/registerUser", (req, res) => {
  const { username, role, firstName, lastName } = req.body;

  const sqlGet = `INSERT INTO user(username,userRole,firstrName,lastName) VALUES('${username}','${role}','${firstName}','${lastName}')`;
  db.query(sqlGet, (error, result) => {
    if (error) {
      res.send(error);
    } else {
      const status = sendRegMail(username);

      res.json(status);
    }
  });
});

router.post("/reguser", (req, res) => {
  const { username, password } = req.body;

  bycrypt.hash(password, 10).then((hash) => {
    const sqlGet = `INSERT INTO user(username,password,userRole) VALUES('${username}','${hash}','coordinator')`;
    db.query(sqlGet, (error, result) => {
      if (error) {
        res.send(error);
      } else {
        // const status=sendRegMail(username);

        res.json("Email semt");
      }
    });
  });
});

router.post("/validateregmail", (req, res) => {
  const token1 = req.body.token;
  const sqlGet = `SELECT * FROM user WHERE isVerified='${token1}'`;
  db.query(sqlGet, (error, result) => {
    if (error) {
      res.send(error);
    } else {
      if (result.length == 0) {
        res.json(0);
      } else {
        res.json(1);
      }
    }
  });
});

router.post("/roleconfig", (req, res) => {
  const data = req.body['accessToken'];

  const x = validToken(data);
  const decoded = jwt_token(data);

  res.json(decoded['userrole']);
});

router.post("/forgetpass", (req, res) => {
  const mail = req.body.username;
  const sqlGet = `SELECT * from user WHERE username='${mail}'`;
  db.query(sqlGet, (error, result) => {
    if (error) {
      res.send(error);
    } else {
      if (result.length != 0) {sendRegMail
        const status = sendforgetMail(mail);
        res.json("success");
      } else {
        res.json("unsuccess");
      }
    }
  });
});

router.post("/sendmail", async (req, res) => {
  const { text } = req.body;
  // res.json(text)

  // var token = randtoken.generate(20);
  // const transport=nodemailer.createTransport({
  //     service:'gmail',
  //     auth:{
  //         user:'malithiperera1998@gmail.com',
  //         pass:'pztoeiikalwcgnhv'
  //     }
  // });

  // var mailOptions={
  //     from:'malithiperera1998@gmail.com',
  //     to:"malithiperera1998@gmail.com",
  //     subject:"Test Mail",
  //     html: '<p>You requested for email verification, kindly use this <a href="http://localhost:3000/?#/leave?token=' + token + '">link</a> to verify your email address</p>'
  // };
  //  transport.sendMail(mailOptions,function(error,info){
  //     if(error){
  //         console.log(error)
  //     }
  //     else{
  //         console.log("email send")
  //     }
  // })
});
router.post("/signupuser", async (req, res) => {
  // const {firstrName,lastName,address,image,dob,org}=req.body;
  const result=await signUpUser(req.body);
  // const data = req.body['accessToken'];

  // const x = validToken(data);
  // const decoded = jwt_token(data);

  res.json(result);
});

router.post("/getnotification", async (req, res) => {

const result=await getnotification(req.body);
  res.json(result);
});

module.exports = router;
