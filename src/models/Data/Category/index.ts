import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
  name: { en: String, fa: String, ar: String },
  src: { type: String, required: true },
  keywords: { en: [String], fa: [String], ar: [String] },
})

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema)

export default Category
