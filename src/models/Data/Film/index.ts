/** @format */

import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  src: { type: String, required: true },
  subImages: [{ type: String }],
  price: { type: Number, required: true },
  categories: [{ type: String, required: true }],
  type: { type: String, required: true },
  size: String,
  color: [{ type: String }],
  quantity: Number,
  description: { type: String, required: true },
  keywords: [{ type: String }],
})
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema)

export default Product
