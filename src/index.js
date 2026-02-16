import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./constants";  

const app = express();

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