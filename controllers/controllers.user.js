const userData=require("../models/user.js");

const saveUserData= async (req,res)=>{
const body=req.body;
try {
    const newuser= await userData.create(body);
    newuser.save().then(data=>res.send(data)).catch(res.send("failed"))
    
} catch (error) {
    res.send("failed");
}
}
module.exports={saveUserData};