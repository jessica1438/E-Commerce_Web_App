const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productschema = new Schema ({
    name : {
        type: String,
        required: [true, "Please Enter a name of the product"],
        trim : true, // this property trims any unwanted space before and after the product name eg : " hello" will be treated as "hello"
        maxLength: [30, "Your product name cannot exceed 30 characters!"],
    },
    description : {
        type: String,
        required : [true, "Please add a description for the product"],
        trim : true,
        maxLength: [3000, "The product description cannot exceed 3000 characters!"],
    },
    offer : {
        type: String,
        trim:true,
        maxLength: [6,"Your Discounted amount cannot exceed 6 characters"],
    },
    colour : {
        type : String,
        required :[true, " Please enter the colour of the product"],
        trim:true,
        maxLength: [30, "The colour name entered cannot exceed 30 characters"],
    },
    specification : {
        type : String,
        required : [true, " Please enter the weight/size/any other specifications related to your product"],
        trim : true,
        maxLength :[100, "The specs of your product shouldn't exceed 100 characters"],
    },
    rating : {
        type : Number,
        default:0,
    },
    //images: [
    //    {public_id:{
    //        type : String,
    //        required : true,
    //    },
    //    url : {
    //        type : String,
    //        required : true,
     //   },
    //},
    //],
    category : {
        type: String,
        required : [true, " Please add a category for your product"],

    },
    stock : {
        type : Number,
        //required : [true,"Please add how many items are in stock currently"],
        maxLength : [2,"Amount of items cannot exceed 2 characters"],
    },
    numofreviews : {
        type : Number,
        deafult : 0,
    },
    reviews :[
        {
            user:{
                type : mongoose.Schema.ObjectId,
                ref : "User",
                required : true,
            },
            name: {
                type : String,
                required:true,
            },
            rating:{
                type:Number,
                required:true,
            },
            comment:{
                type: String,
            },
            date:{
                type:Date,
                default: Date.now(),
            },

        },],

        user:{
            type:mongoose.Schema.ObjectId,
            ref:"User",
        },
        createAt:{
            type:Date,
            default:Date.now(),
        },})

module.exports = mongoose.model("ProductModel",productschema);