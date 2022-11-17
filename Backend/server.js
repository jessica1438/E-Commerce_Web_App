const express = require("express")
const app = require ("./app")
const dotenv = require("dotenv");
const mongoose  = require("mongoose");

require("dotenv").config();

process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server for handling uncaught exception`)

})

const port = process.env.PORT ;
const url = process.env.DATABASE 

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> console.log("Connected to the Database"))
.then(()=>{app.listen(port)})
.catch((err) => console.log(err))


//unhandled promise rejection

process.on("unhandledRejection",(err)=>{
    console.log(`Shutting down the server for ${err.message}`);
    console.log(`Shutting down the server due to unhandled promise rejection`);
    server.close(()=>{
        process.exit(1)})
    })

