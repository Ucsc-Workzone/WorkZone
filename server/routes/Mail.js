const randtoken = require('rand-token');
const {db}=require('../models/Index');
const nodemailer=require("nodemailer") ;


const sendRegMail=((req,res,next)=>{
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
        to:"malithiperera1998@gmail.com",
        subject:"Test Mail",
        html: '<p>You requested for email verification, kindly use this <a href="http://localhost:3000/?#/leave?token=' + token + '">link</a> to verify your email address</p>'
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
module.exports={sendRegMail}