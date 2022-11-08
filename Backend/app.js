const express = require ("express")
const mongoose= require("mongoose")
const app = express()
const cors = require ("cors")

//middlewares
app.use(express.json())
app.use(cors())


const product = require("./routes/ProductRoute")

app.use("/api/v2",product)

module.exports = app



