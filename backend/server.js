require('dotenv').config();
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// MongoDB Connection
// ...existing code...
const uri = `mongodb+srv://${process.env.DB_USER}:${encodeURIComponent(process.env.DB_PASS)}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
// ...existing code...

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  connectTimeoutMS: 30000,
});

async function connectDB() {
  try {
    await client.connect();
    await client.db().admin().command({ ping: 1 });
    console.log('Connected to MongoDB Atlas!');
    return client.db(process.env.DB_NAME);
  } catch (err) {
    console.error('MongoDB connection error:', err);
    if (err.message.includes('ENOTFOUND')) {
      console.error('DNS resolution failed. Possible solutions:');
      console.error('1. Check your internet connection');
      console.error('2. Try using Google DNS (8.8.8.8)');
      console.error('3. Verify the cluster hostname is correct');
    }
    process.exit(1);
  }
}

// Initialize DB connection
const dbPromise = connectDB().then(db => {
  db.collection('contacts').createIndex({ email: 1 }, { unique: true });
  return db;
});

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const result = await (await dbPromise)
      .collection('contacts')
      .insertOne({
        ...req.body,
        createdAt: new Date()
      });
    
    res.status(201).json({ success: true, id: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../frontend/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('../frontend/build/index.html'));
  });
}

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});