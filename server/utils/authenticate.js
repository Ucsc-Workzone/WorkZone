const {verify}=require('jsonwebtoken')
module.exports={

    verifyuser(accessToken){
        if(!accessToken){
            return 1;
        }
        else{
            try{
                const validToken=verify(accessToken,"Secret web Token");
                if(validToken){
                    req.authenticated=true;
                    return 3;
                }
    
            }
            catch(err){
                return 2;
    
            }
        }
    }
}