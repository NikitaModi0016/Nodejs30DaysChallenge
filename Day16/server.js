const express = require('express');
const dotEnv = require("dotenv");
const mongoose = require('mongoose');

const app = express();
dotEnv.config();
const PORT = process.env.PORT || 3000;

const mongoDBUrl = process.env.MONGO_URL;
mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB successfully!');
});

app.get('/', (req, res) => {
  res.send('Hello, MongoDB!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
