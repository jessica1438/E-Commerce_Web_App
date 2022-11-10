const express = require("express")
const app = require ("./app")
const dotenv = require("dotenv");
const mongoose  = require("mongoose");

require("dotenv").config();


const port = process.env.PORT ;
const url = process.env.DATABASE 

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> console.log("Connected to the Database"))
.then(()=>{app.listen(port)})
.catch((err) => console.log(err))

