console.log("INDEX FILE LOADED");
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./constants.js";  
import connectDB from "./db/connection.js";
import { app } from "./app.js";

dotenv.config();
//const app = express();
const PORT = process.env.PORT || 5000;
connectDB()
.then(()=>{
    app.listen(PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})
})
.catch((err)=>{
    console.log("MongoDB connection failed")
})































    //* first approach on database connection  
/* 
(async ()=>{
    try{
        await mongoose.connect(`${process.env.mongoDB_URL}`/`${DB_NAME}`)   // 
        app.on("Error",(error)=>{
            console.log("Error",error);
            throw error;
        })
       app.listen(process.env.PORT, ()=>{
            console.log(`Application is listening on ${process.env.PORT}`)
       })
    }
    catch(error){
        console.error("Error",error)
        throw error;
    }
    
})()
*/