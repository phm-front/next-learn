import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method?.toUpperCase() === 'POST') {
    console.log(req.body, req.headers);
    res.status(200).send({ name: "John Doe" });
  } else {
    res.status(400).send({ success: false, msg: 'not support methods' })
  }
}
