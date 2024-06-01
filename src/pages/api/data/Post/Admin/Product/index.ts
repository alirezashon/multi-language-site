/** @format */

import { NextApiRequest, NextApiResponse } from "next"
import Product from "../../../../../../models/Data/Product"
import db from "../../../../../../utils"

const cateBrand = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      const { user, aydi } = req.query
      const { authType, data, action } = req.body
      if (authType === "^c(a)t*E(Tso^soalsgfs^$#m!") {
        await db.connect2DB()
        if (action === "(*I&n()s*e(r&t*^%t^O&n*E(") {
          await Product.create(data)
          res.status(200).json({ success: true })
        } else if (action === ")U*p)d(sa@!$!2s1!23r2%a$t#e@i*n(") {
          if (aydi && aydi.length > 0) {
            ;(await Product.findOneAndUpdate({ _id: aydi }, data))
              ? res.status(200).json({ success: true })
              : res.status(401).json({ success: false })
          } else {
            res.status(402).json({ success: false })
          }
        } else if (action === "&d*E%e#t&*^%s^waf#$^e$o%f@") {
          if (aydi && aydi.length > 0) {
            ;(await Product.findByIdAndDelete({ _id: aydi }, data))
              ? res.status(200).json({ success: true })
              : res.status(401).json({ success: false })
          } else {
            res.status(402).json({ success: false })
          }
        } else {
          res.status(405).json({ success: false })
        }
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
