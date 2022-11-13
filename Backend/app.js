const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const product = require("./routes/ProductRoute");
const Error=require("./middlewares/error")


//middlewares
app.use(express.json());
//app.use(cors())

app.use("/api/v2", product);

app.use(Error)

module.exports = app;
