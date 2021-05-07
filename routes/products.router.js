const express = require('express');
const router = express.Router();
const { extend } = require("lodash");

const { Product } = require("../models/product.model.js");

router.route("/")
.get(async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({success: true, products})
  }
  catch (err) {
    res.status(500).json({success: false, message: "unable to get products", errorMessage: err.message})
  }
}) 

//middleware to get productId

router.param("productId", async (req, res, next, id) => {
  try {
    const product = await Product.findById(id);

    if (!product) {
      res.status(400).json({success: false, message: "couldn't find the product"  })
    }
    req.product = product;
    next();
  }
  catch (error) {
    res.status(400).json({success: false, message: "There was some error with the request, couldn't retrieve the product"})
  }
})

router.route("/:productId")
.get(async (req, res) => {

  const {product} = req;
  console.log(product);
  res.status(200).json({success: true, product})

})

module.exports = router; 