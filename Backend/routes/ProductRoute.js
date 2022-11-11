const express = require("express")
const router = express.Router()
const product = require("../controllers/ProductController")

router.get("/product",product.getallProducts)

router.post("/product/new",product.AddProduct)

router.put ("/product/:id",product.updateProduct)

module.exports = router;