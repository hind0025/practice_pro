const jwt=require('jsonwebtoken')
const createToken=jwt.sign(payload,process.env.PRIVATE_KEY,(err,token)=>
{
    
    if(err)
    {
        console.error("INVALID: ",err.message)
    }
    else
    {
        console.log(token);
    }
})
const validateToken=jwt.verify(token,process.env.PRIVATE_KEY,function(err,decoded)
{
    if(err)
    {
        console.error("INVALID: ",err.message)
    }
    else
    {
        console.log(token);
    }
   
})