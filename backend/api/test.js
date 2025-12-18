import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

export default async function handler(req, res) {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db(); // Uses default DB from URI
    const sample = await db.collection('sample').find({}).limit(5).toArray();
    await client.close();
    res.status(200).json({ ok: true, sample });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
}
