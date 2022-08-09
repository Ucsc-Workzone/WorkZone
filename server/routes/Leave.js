const router = require("express").Router();

router.post('/getLeave',async(req,res)=>{
    const userid=req.userid;
    const token=req.token;
    res.json(userid)

})

module.exports=router;