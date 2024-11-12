const express = require("express");
const router = express.Router();
const asyncHandler=require("express-async-handler")
const {validatejwtToken}=require("../middleware/jwtMiddleware")

const User=require("../model/userModel")
const myacc=async(req,res)=>
{
    const{email}=req.body;
    const user=await User.findOne({email});
    if(user)
    {
        res.send(user);
    }

}
const {
    registerUser,
     loginUser
}=require("../controller/userController");
router.post("/register" , registerUser);
router.post("/login",loginUser);
router.get("/details",myacc,validatejwtToken)
// router.post("/protected", jwtAuthMiddleware, (req, res) => {
//     res.json({ message: "Access granted to protected resource", user: req.user });
// });

module.exports=router;