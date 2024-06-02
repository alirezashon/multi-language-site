/** @format */

import { NextApiRequest, NextApiResponse } from "next"
import Blog from "../../../../../../../models/Data/Blog"
import db from "../../../../../../../utils"

const cateBrand = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      const { authType } = req.body
      if (authType === "^c(a)ta*sEa0c(ga&roo*uxs^ezl&i#A!") {
        await db.connect2DB()
        const blog = await Blog.find({})
        res.status(200).json({ blog })
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
