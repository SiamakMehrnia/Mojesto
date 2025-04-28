import { connectToDatabase } from './../../../utils/mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === 'POST') {
    try {
      const { name, role, image } = req.body;
      const newMember = await db.collection('team').insertOne({ name, role, image });
      res.status(201).json(newMember);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'GET') {
    try {
      const members = await db.collection('team').find().toArray();
      res.status(200).json(members);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}