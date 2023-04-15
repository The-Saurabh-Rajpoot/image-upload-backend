const mongoose = require("mongoose");
const mongoUrl="mongodb+srv://saurabh941193:Spiderman@cluster0.wfhwzur.mongodb.net/?retryWrites=true&w=majority"
const connect=()=>{
    mongoose.connect(mongoUrl,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
        console.log("connected to database");
    }).catch(err=>console.log(err));
}
module.exports={connect};