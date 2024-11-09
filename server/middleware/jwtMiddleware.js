const jwt=require('jsonwebtoken')


// const generateToken=(userData)=>
// {
//     //in this function we r creating new fresh jwt token to proovide user for sesion /login management or for authorization
//     return jwt.sign(userData,process.env.PRIVATE_KEY);

// }
const validatejwtToken=(req,res,next)=>
{
    const authorization=req.headers.authorization;
    //output 1=bearer dshijifjjj
    //output 2=dsdfgih
    //output 3=
    //output 4=token bana h n aa

    if(!authorization)
    {
        return res.status(401).json({err:'token not available'})
    }
    const token=req.headers.authorization.split(' ')[1]
    //token provided is wrong ,throw error 
    if(!token)
    {
        return res.status(401).json({err:'unauthorized error'})
    }
    try{
        //we are handling if token is validated then move to next or respond back to client 
        const validateToken=jwt.verify(token,process.env.PRIVATE_KEY);
        
        req.user=validateToken;
        next();
    }
    catch(err)
    {
        console.error("error occured: ",err.message);
    }
}
module.exports={validatejwtToken}
