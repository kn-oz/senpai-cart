import Product from "../../models/Product";
import User from "../../models/User";
import { data } from "../../lib/data";
import db from "../../lib/database";

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  console.log(data)
  await User.insertMany(data.users);
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
};
export default handler;