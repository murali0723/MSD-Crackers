const express =require ("express");
const app=express();
const connectDB=require("./config/db");
const userRouter=require("./routes/user1");
const cors = require("cors");

connectDB();
app.use(cors());
app.use(express.json());

app.use("/user1",userRouter);

app.get("/",(req,res)=>{
    res.send("Api is working");
});

app.listen( process.env.PORT || 4000,()=>{
console.log("server upon running");
});
