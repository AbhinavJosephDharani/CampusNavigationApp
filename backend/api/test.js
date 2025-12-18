
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const sample = await db.collection('sample').find({}).limit(5).toArray();
    res.status(200).json({ ok: true, sample });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
}
