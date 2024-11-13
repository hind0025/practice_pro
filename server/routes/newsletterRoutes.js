const express=require("express")
const router=express.router()
const  {getnewsletter,createnewsletter}=require("../controller/newsletterController")
const {jwtAuthMiddleware}=require("../middleware/jwtMiddleware")

router.get("/",getnewsletter);
router.post("/",jwtAuthMiddleware,createnewsletter);