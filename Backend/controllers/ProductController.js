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


const productmodel = require ("../models/ProductModel")

const AddProduct = async(req,res,next)=>{
    const product = await productmodel.create(req.body)

    res.status(201).json({
        success : true,
        product
    })
}
const getallProducts = async(req,res,next)=>{
    const product = await productmodel.find()

    res.status(200).json({
        success:true,
        product
    })
}

const updateProduct = async(req,res,next)=>{
    const id = req.params.id
    let product = await productmodel.findById(id)
    if (!product){
        res.status(400).json({
            success:false,
            message:"Sorry :( couldn't find the product for this ID"
        })
    }
    product= await productmodel.findByIdAndUpdate(id,req.body,{new:true,runValidators:true,useUnified:false})
    
    res.status(200).json({
        success:true,
        product
    })
}

exports.getallProducts = getallProducts
exports.AddProduct = AddProduct
exports.updateProduct = updateProduct