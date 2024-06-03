/** @format */

import { NextApiRequest, NextApiResponse } from "next"
import Form from "../../../../../../models/Data/Form"
import db from "../../../../../../utils"

const cateBrand = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      const { authType, data } = req.body
      if (authType === "0c^o(n^%T$a#C%t@p&a*s(o)p*a)z&aim#anA!") {
        await db.connect2DB()

        const form = await Form.create(data)
          .then(() => {
            res.status(200).json({ success: true })
          })
          // .catch(() => {
          //   res.status(201).json({ success: false })
          // })
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
