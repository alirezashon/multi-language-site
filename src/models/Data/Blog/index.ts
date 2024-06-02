/** @format */

import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
  title: { en: String, fa: String, ar: String },
  src: { type: String, required: true },
  description: { en: String, fa: String, ar: String },
  keywords: { en: [String], fa: [String], ar: [String] },
  subItems: [
    {
      title: { en: String, fa: String, ar: String },
      src: { type: String, required: true },
      description: { en: String, fa: String, ar: String },
      keywords: { en: [String], fa: [String], ar: [String] },
    },
  ],
})
const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema)

export default Blog
