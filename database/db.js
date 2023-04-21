require("dotenv").config()
const mongoose = require("mongoose");
const mongoUrl=process.env.DATA_BASE_URL;
const connect=()=>{
    mongoose.connect(mongoUrl,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
        console.log("connected to database");
    }).catch(err=>console.log(err));
}
module.exports={connect};