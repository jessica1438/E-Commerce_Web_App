//The ProductController.js performs the following functions
//Admin can create a product
//Admin can read all the Products
//Admin can update all the products
//Admin can delete a product 
//Admin can delete a review 
//Admin can delete the images from cloudinary
//Users can get all products
//User or admin can view single product details
//User can create or update a new review
//User or admin can get all review of a single product


const getallProducts = (req,res)=>{
    res.status(200).json({
        message:"Route is cnnected"
    })
}

exports.getallProducts = getallProducts

const Product = require("../models/ProductModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Features = require("../utils/Features");
const cloudinary = require("cloudinary");

// create Product --Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "products",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;
  req.body.user = req.user.id;

  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

exports.getAdminProducts = catchAsyncErrors(async (req, res, next) => {
    const products = await Product.find();
  
    res.status(200).json({
      success: true,
      products,
    });
  });
  
  // get All Products
  exports.getAllProducts = catchAsyncErrors(async (req, res) => {
    const resultPerPage = 8;
  
    const productsCount = await Product.countDocuments();
  
    const feature = new Features(Product.find(), req.query)
      .search()
      .filter()
      .pagination(resultPerPage);
    const products = await feature.query;
    res.status(200).json({
      success: true,
      products,
      productsCount,
      resultPerPage,
    });
  });