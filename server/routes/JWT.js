const {sign,verify}=require('jsonwebtoken')

const createToken=(user)=>{
const accessToken=sign({username:user.username,userid:user.userid},"Secret web Token");
return accessToken;
};

const validToken=(req,res,next)=>{
    const accessToken=req.cookies["access-Token"];
    if(!accessToken){
        return res.status(400).json({error:"User Not Authenticated"})
    }
    else{
        try{
            const validToken=verify(accessToken,"Secret web Token");
            if(validToken){
                req.authenticated=true;
                return next();
            }

        }
        catch(err){
            return res.status(400).json({error:err});

        }
    }
}

function sendEmail(email, token) {
 
    var email = email;
    var token = token;
 
    var mail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '', // Your email id
            pass: '' // Your password
        }
    });
 
    var mailOptions = {
        from: 'tutsmake@gmail.com',
        to: email,
        subject: 'Email verification - Tutsmake.com',
        html: '<p>You requested for email verification, kindly use this <a href="http://localhost:3000/verify-email?token=' + token + '">link</a> to verify your email address</p>'
 
    };
 
    mail.sendMail(mailOptions, function(error, info) {
        if (error) {
            return 1
        } else {
            return 0
        }
    });
}

module.exports={createToken,validToken,sendEmail};