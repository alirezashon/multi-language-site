import mongoose from "mongoose"

const connect2DB = async () => {
  try {
    await mongoose.connect(process.env.HUB_DATA_USER_MANAGE_ENV, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  } catch (error) {
    console.error("MongoDB connection to Shop had  error:", error)
  }  
}

const db = { connect2DB }
export default db
