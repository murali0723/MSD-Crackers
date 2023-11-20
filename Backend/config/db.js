const mongoose=require("mongoose");
const express=require("express");
const app = require("mongoose");
app.trusted(express.json());

const url="mongodb+srv://murali:murali@entribd.lkpfdf5.mongodb.net/crackers-app?retryWrites=true&w=majority";


const connectDB = async()=>{
    try{
        const con=await mongoose.connect(url);
        console.log(`MongooseDB connected: ${con.connection.host}`);
    } catch (error){
        console.log(error);
    }
};

module.exports=connectDB;