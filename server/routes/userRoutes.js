const express = require("express");
const router = express.Router();
import {jwtAuthMiddleware} from "../middleware/jwtMiddleware";
const {
    registerUser,
     loginUser
}=require("../controller/userController");
router.post("/register" , registerUser);
router.post("/login",jwtAuthMiddleware,loginUser);
// router.post("/protected", jwtAuthMiddleware, (req, res) => {
//     res.json({ message: "Access granted to protected resource", user: req.user });
// });

module.exports=router;