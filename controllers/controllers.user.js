const userData=require("../models/user.js");
const mongoose=require("mongoose");
const saveUserData= async (req,res)=>{
const body=req.body;

    const newuser= await userData.create(body);
    newuser.save().then(data=>res.send(data)).catch((err)=>{res.send("failed")});
}

module.exports={saveUserData};