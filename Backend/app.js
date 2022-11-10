const express = require ("express")
const mongoose= require("mongoose")
const app = express()
const cors = require ("cors")
const productss = require("./routes/ProductRoute")


//middlewares
app.use(express.json())
//app.use(cors())


app.use("/api/v2",productss)

module.exports = app



