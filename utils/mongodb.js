import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI;
let client;
let clientPromise;

if (!process.env.MONGO_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

console.log("Trying to connect to MongoDB with URI:", process.env.MONGO_URI);
console.log("Connecting to database...");

export async function connectToDatabase() {
  const client = await clientPromise;
  const db = client.db('Mejsto'); // ✅ اسم دقیق دیتابیس اینجا داده شده
  return { client, db };
}