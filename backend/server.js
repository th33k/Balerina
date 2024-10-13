const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://ballerina:tAf9lM70NNr2ldI1@cluster1.zoqrz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Connection status endpoint
app.get('/api/db-status', async (req, res) => {
  try {
    await mongoose.connection.db.admin().ping();
    res.status(200).send('Database is connected');
  } catch (error) {
    res.status(500).send('Database is not connected');
  }
});

// Import routes
const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});