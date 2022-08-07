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

module.exports={createToken,validToken};