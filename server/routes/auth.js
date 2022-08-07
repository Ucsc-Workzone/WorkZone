const bycrypt=require('bcrypt')
const router = require("express").Router();
const mysql=require("mysql2");
const{createToken,validToken}=require('./JWT')
let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'crud_contact'
});
db.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });


router.post('/login',async(req,res)=>{
    
    const username=req.body.username;
    const password=req.body.password;
    const sqlGet=`SELECT * FROM user where username='${username}'`;
    db.query(sqlGet,(error,result)=>{
       
       if(result.length==0){
        res.status(400).json({error:"User Doent Exist"})
       }
       else{
        const dbpassword=result[0].password;
       bycrypt.compare(password,dbpassword).then((match)=>{
            if(!match){
                res.status(400).json({error:"Invalid Credentials"})
            }
            else{
                const accessToken=createToken(result[0]);
             res.cookie("access-Token",accessToken,{
                maxAge:60*60*24*1000*30
             });
             res.json("Loggin")
            }
            
        })
       }
    })

      
})

router.post('/register',(req,res)=>{
  const {userid,username,password,userrole}=req.body;
  bycrypt.hash(password,10).then((hash)=>{
    const sqlGet=`INSERT INTO user(userid,username,password,userrole) VALUES(${userid},'${username}','${hash}','${userrole}')`;
    db.query(sqlGet,(error,result)=>{
        if(error){
            res.send(error)
        }
        else{
            res.json("User Registered")
        }
    })
  })
})

router.post('/profile',validToken,(req,res)=>{
    res.json("Profile")
})
module.exports = router;
