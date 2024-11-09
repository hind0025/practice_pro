const express = require("express");
const router = express.Router();
//import {generateToken} from "../middleware/jwtMiddleware";
// const{ validatejwtToken,generateToken}=require("../middleware/jwtMiddleware")
const {
    registerUser,
     loginUser
}=require("../controller/userController");
router.post("/register" , registerUser);
router.post("/login",loginUser);
// router.post("/protected", jwtAuthMiddleware, (req, res) => {
//     res.json({ message: "Access granted to protected resource", user: req.user });
// });

module.exports=router;