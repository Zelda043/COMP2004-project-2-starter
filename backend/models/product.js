const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  id: String,
  productName: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    requried: true,
  },
  image: {
    type: String,
    requried: true,
  },
  price: {
    type: String,
    requried: true,
  },
});

const Product = mongoose.model("Product", productSchema, "products");
module.exports = Product;
