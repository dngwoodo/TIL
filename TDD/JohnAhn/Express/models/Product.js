const mongoose = require("mongoose");

// 새로운 스키마 생성
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
});

const Product = mongoose.model("Product", productSchema); // collection에 products라고 저장되어져 있음

export default Product;
