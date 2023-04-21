const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:String,
    image:String,
    address:String
})
module.exports= mongoose.model("userData",userSchema);