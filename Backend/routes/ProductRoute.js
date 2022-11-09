const express = require("express")
const router = express.Router()
const product = require("../controllers/ProductController")

router.get("/product",product.getallProducts)

module.exports = router;