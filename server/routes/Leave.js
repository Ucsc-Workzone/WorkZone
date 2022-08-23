const bycrypt=require('bcrypt')
const router = require("express").Router();
const{createToken,validToken}=require('./JWT')
const {db}=require('../models/Index')
const jwt_token=require('jwt-decode')
const {sendRegMail,sendforgetMail}=require('./Mail')

router.post('/getLeave',async(req,res)=>{
    const userid=req.userId;
  
    // const token=req.token;
    const sqlGet=`SELECT * from leaverequest WHERE memberId= 5  `;
    db.query(sqlGet,(error,result)=>{
        if(error){
            res.send(error)
        }
        else{
        //     if(result.length!=0){
        //         res.json('success')
        //     }
        //  else{
        //     res.json('unsuccess');
        //  }
        res.json(result)
            
          
        }
    })

})
router.post('/submitLeave',async(req,res)=>{
     const {userid,type,member,reason,toDate,endDate}=req.body;
  
    
    // // const token=req.token;
    const sqlGet=`INSERT INTO leaverequest (memberId,description,fromDate,toDate,status,nodays,assignMember) VALUES (5,'sick','2022-08-26','2022-08-26','Pending',01,'H.R Herath') `;
    db.query(sqlGet,(error,result)=>{
        if(error){
            res.send(error)
        }
        else{
        //     
        res.json(true)
       
            
          
         }
    })
  

})

module.exports=router;