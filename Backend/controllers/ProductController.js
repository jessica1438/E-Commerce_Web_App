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

const productmodel = require("../models/ProductModel");
const ErrorHandler = require("../utils/errorhandler")
const catchasyncError=require("../middlewares/catchasyncError")



const AddProduct = catchasyncError(async (req, res, next) => {
  const product = await productmodel.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
})

const getallProducts = catchasyncError(async (req, res, next) => {
  const product = await productmodel.find();

  res.status(200).json({
    success: true,
    product,
  });
}
)
const updateProduct = catchasyncError(async (req, res, next) => {
  const id = req.params.id;
  let product = await productmodel.findById(id);
  if (!product) {
    return next (new ErrorHandler("Product not found with this ID","404"))
    /*res.status(400).json({
      success: false,
      message: "Sorry :( couldn't find the product for this ID",
    });*/
  }
  product = await productmodel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useUnified: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
})

const deleteProduct = catchasyncError(async (req, res, next) => {
  const id = req.params.id;
  let product = await productmodel.findById(id);

  if (!product) {
      return next (new ErrorHandler("Product not found with this ID","404"))
    /*res.status(400).json({
      success: false,
      message: "Sorry :( couldn't find the product your looking for",
    });*/
  }
  product = await productmodel.findByIdAndRemove(id); //if you dont need a record of the deleted document then u can use remove . Using findbyIdanddelete will return the deleted document record

  res.status(200).json({
    success: true,
    message: "Successfully deleted the product",
  });
})

const getbyId = catchasyncError(async (req, res, next) => {
  const id = req.params.id;
  const product = await productmodel.findById(id);
  if (!product) {
      return next(new ErrorHandler("Product not found with this ID",404))
  }

    /*res.status(400).json({
      success: false,
      message: "Sorry ! Could not find the product you are looking for",
    });*/
  

  res.status(200).json({
    success: true,
    product,
  });
})

exports.getallProducts = getallProducts;
exports.AddProduct = AddProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
exports.getbyId = getbyId;

//make sure all the brackets are fine cuz becasue of that it can possibly not excute anything
//for example if brackets are not right in the if(!products) then the whole code doesnt execute
//make sure spelling is right when you create models on postman ( wrong spelling can lead to errors)
