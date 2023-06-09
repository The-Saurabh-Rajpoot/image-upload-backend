const express=require("express");
const {connect}=require("./database/db.js");
const cors=require("cors");
connect();
const port=8005;
const app=express();
app.use(cors());
app.use(express.json());
const {router}=require("./routes/router.js");
app.use("/",router);
app.listen(port,()=>{console.log(`app is listing on ${port}`)});