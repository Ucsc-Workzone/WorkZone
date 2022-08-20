const randtoken = require('rand-token');
const {db}=require('../models/Index');
const nodemailer=require("nodemailer") ;
const crypto = require("crypto")
const bycrypt=require('bcrypt')
const sendRegMail=((req,res,next)=>{

    bycrypt.hash(req,10).then((hash)=>{
        const transport=nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'malithiperera1998@gmail.com',
                pass:'pztoeiikalwcgnhv'
            }
        });
     
    
        var mailOptions={
            from:'malithiperera1998@gmail.com',
            to:"malithiperera1998@gmail.com",
            subject:"Registartion Confirmation",
            html: '<h2>Welome to the WorkZone Community<h2/><p>You requested for email verification, kindly use this <a href="http://localhost:3000/workzone/pages/forgetpassword?token=' + hash + '">link</a> to verify your email address</p>'
        };
         transport.sendMail(mailOptions,function(error,info){
            if(error){
                console.log(error)
            }
            else{
               return 1;
            }
        })
      
      })
   
})
const sendforgetMail=((req,res,next)=>{
    const email=req;
    console.log(email)
    var token = randtoken.generate(20);
    const transport=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'malithiperera1998@gmail.com',
            pass:'pztoeiikalwcgnhv'
        }
    });
 

    var mailOptions={
        from:'malithiperera1998@gmail.com',
        to:email,
        subject:"Confirmation Link For Forget Passowrd",
        html: '<p>Your requested for password Change  Link, kindly use this <a href="http://localhost:3000/workzone/pages/forgetpassword">link</a> to Change Your Password</p>'
    };
     transport.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error)
        }
        else{
           return next();
        }
    })
   
  
})
module.exports={sendRegMail,sendforgetMail}