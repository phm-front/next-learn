import type { NextApiRequest, NextApiResponse } from "next";
import { getClientByName } from "../../utils";
const client = getClientByName("test");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await client.connect();
  const db = client.db();
  const collection = db.collection("documents");
  // 向documents表插入一条数据
  await collection.insertOne({ email: "123@qq.com" });
  // 查询所有数据 sort 排序
  // const list = await collection.find().sort({ _id: -1 }).toArray();
  // 关闭连接
  client.close();
  res.status(200).send({ success: true });
}
