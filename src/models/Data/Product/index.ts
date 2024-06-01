/** @format */

import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  title: { en: String, fa: String, ar: String },
  src: { type: String, required: true },
  link: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  description: { en: String, fa: String, ar: String },
  keywords: { en: [String], fa: [String], ar: [String] },
})
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema)

export default Product
