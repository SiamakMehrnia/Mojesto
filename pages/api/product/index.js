import { connectToDatabase } from '../../../utils/mongodb';

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase();

    if (req.method === 'POST') {
      const { name, image } = req.body;
      if (!name || !image) {
        return res.status(400).json({ error: "Name and image are required" });
      }
      const newProduct = await db.collection('product').insertOne({ name, image });
      return res.status(201).json(newProduct);
    }

    if (req.method === 'GET') {
      const products = await db.collection('product').find({}).toArray();
      return res.status(200).json(products);
    }

    res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    console.error('Error in /api/product:', error);
    res.status(500).json({ error: error.message });
  }
}