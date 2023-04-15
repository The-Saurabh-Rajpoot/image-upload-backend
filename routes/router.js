const {saveUserData}=require("../controllers/controllers.user.js");
const express=require("express");
const router=express.Router();
router.post("/post",saveUserData);
module.exports={router};