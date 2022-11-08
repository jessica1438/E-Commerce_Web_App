const express = require ("express")
const mongoose= require("mongoose")
const app = express()
const cors = require ("cors")

//middlewares
app.use(express.json())
app.use(cors())

//importing all the routes
const order = require("./routes/OrderRoute")
const payment = require("./routes/PaymentRoute")
const product = require("./routes/ProductRoute")
const user = require("./routes/UserRoute")
const cart = require( "./routes/CartRoute")




