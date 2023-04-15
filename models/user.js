import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:String,
    image:String,
    address:String
})
export default mongoose.model("userData",userSchema);