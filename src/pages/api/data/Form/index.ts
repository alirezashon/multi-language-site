/** @format */

import { NextApiRequest, NextApiResponse } from "next"
import Form from "../../../../models/Data/Form"
import db from "../../../../utils/index.js"
const Shop = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      const { products, authType } = req.body
      if (authType === "S&H!O*P^I$N#G$T^I@M*E") {
		db.connect2DB()
        await Form.create(products)
          .then(() => res.status(200).json({ success: true }))
          .catch(() => res.status(201).json({ success: false }))
      }
    } else {
      res.status(409).json({ success: false, message: "Invalid Request Type" })
    }
  } catch (err) {
    res.status(500).json({ success: false, message: `Server Error => ${err}` })
  }
}
export default Shop
