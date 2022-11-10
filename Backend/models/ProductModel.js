const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productschema = new Schema ({
    name : {
        type: String,
        required: [true, "Please Enter a name of the product"],
        trim : true, // this property trims any unwanted space before and after the product name eg : " hello" will be treated as "hello"
        maxLength: [30, "Your product name cannot exceed 30 characters!"]
    },
    description : {
        type: String,
        required : [true, "Please add a description for the product"]
        trim : true,
        maxLength: [3000, "The product description cannot exceed 3000 characters!"]
    },
    offer : {
        type: String,
        trim:true,
        maxLength: [6,"Your Discounted amount cannot exceed 6 characters"]
    },
    color : 
})