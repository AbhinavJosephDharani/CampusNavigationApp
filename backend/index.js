import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Campus Navigation Backend is running!');
});

// Placeholder endpoints for core features
app.use('/api/users', (req, res) => res.json([]));
app.use('/api/buildings', (req, res) => res.json([]));
app.use('/api/map', (req, res) => res.json({}));
app.use('/api/destinations', (req, res) => res.json([]));
app.use('/api/search', (req, res) => res.json([]));
app.use('/api/route', (req, res) => res.json({ path: [], instructions: [] }));
app.use('/api/gps', (req, res) => res.json({ lat: 0, lng: 0 }));
app.use('/api/favorites', (req, res) => res.json([]));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
