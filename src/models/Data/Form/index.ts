import mongoose from "mongoose"

const formSchema = new mongoose.Schema({
  name: String,
  contact: String,
  description: String,
  date: { type: Date, default: new Date() },
})

const Form = mongoose.models.Form || mongoose.model("Form", formSchema)

export default Form
