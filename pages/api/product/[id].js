import { connectToDatabase } from './../../../utils/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const { id } = req.query;

  if (req.method === 'PUT') {
    try {
      const { name, image } = req.body;
      const updatedProduct = await db.collection('product').updateOne(
        { _id: new ObjectId(id) },
        { $set: { name, image } }
      );
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'DELETE') {
    try {
      const deletedProduct = await db.collection('product').deleteOne({ _id: new ObjectId(id) });
      res.status(200).json(deletedProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}