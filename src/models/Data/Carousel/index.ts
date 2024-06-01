import mongoose from "mongoose"

const carouselSchema = new mongoose.Schema({
  src: String,
  alt: { en: String, fa: String, ar: String },
  keywords:{ en: [String], fa: [String], ar: [String] },
})

const Carousel =
  mongoose.models.Carousel || mongoose.model("Carousel", carouselSchema)

export default Carousel
