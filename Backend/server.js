const express = require("express")
const app = require ("./app")
const dotenv=require("dotenv")

dotenv.config({
    path:"Backend/configuration/.env"
})
const port = process.env.PORT;


app.use (app.product)

//Create our server at the port defined by us 
const createserver = app.listen(port,()=>{
    console.log(`Server is working on https://localhost:${port}`)
})