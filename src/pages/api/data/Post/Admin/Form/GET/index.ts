/** @format */

import { NextApiRequest, NextApiResponse } from "next"
import Form from "../../../../../../../models/Data/Form"
import db from "../../../../../../../utils"

const cateBrand = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      const { authType } = req.body
      if (authType === "*z)a(m&a*r^i$y#a@n$a$l(i*o(t*a&y^") {
        await db.connect2DB()
        const form = await Form.find({})
        res.status(200).json({ form })
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
