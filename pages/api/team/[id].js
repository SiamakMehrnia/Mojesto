import { connectToDatabase } from './../../../utils/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const { id } = req.query;

  if (req.method === 'PUT') {
    try {
      const { name, role, image } = req.body;
      const updatedMember = await db.collection('team').updateOne(
        { _id: new ObjectId(id) },
        { $set: { name, role, image } }
      );
      res.status(200).json(updatedMember);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'DELETE') {
    try {
      const deletedMember = await db.collection('team').deleteOne({ _id: new ObjectId(id) });
      res.status(200).json(deletedMember);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}