// Import required modules
const express = require('express');
const dotEnv = require("dotenv");
const mongoose = require('mongoose');

// Create an Express application
const app = express();
dotEnv.config();
const PORT = process.env.PORT || 3000;

// MongoDB connection string
const mongoDBUrl = process.env.MONGO_URL;

// Connect to MongoDB
mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Event handlers for connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB successfully!');
});

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, MongoDB!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
