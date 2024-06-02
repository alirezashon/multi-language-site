/** @format */

import { NextApiRequest, NextApiResponse } from "next"
import Carousel from "../../../../../models/Data/Carousel"
import Category from "../../../../../models/Data/Category"
import Product from "../../../../../models/Data/Product"
import db from "../../../../../utils"

const cateBrand = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      const { authType } = req.body
      if (authType === "^c(a)ta*@x$a#r#x%s^ezl&i#A!") {
        await db.connect2DB()
        const carousel = await Carousel.find({})
        const categories = await Category.find({})
        const products = await Product.find({})
        res.status(200).json({ carousel, products, categories })
      } else {
        res.status(407).json({ success: false })
      }
    } else {
      res.status(409).json({ success: false })
    }
  } catch (err) {
    res.status(500).json({ success: false, message: `Server Error => ${err}` })
  }
}

export default cateBrand
