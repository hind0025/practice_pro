const asyncHandler=require("express-async-handler");
const newsletter=require("../model/newsletterModel");


const getnewsletter=asyncHandler(async(req,res)=>
{
    try{

    }
    catch(err)
    {
        return res.status(404).json("err:err.message")
    }
    const data=a

})
const createnewsletter=asyncHandler(async(req,res)=>
{
        
})

module.exports={
    getnewsletter,createnewsletter
}