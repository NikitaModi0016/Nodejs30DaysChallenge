const express = require('express');
const dotenv = require('dotenv');
const authenticationMiddleware = require('./authenticationMiddleware');


dotenv.config();


const app = express();


app.use(express.json());


app.get('/api/protected', authenticationMiddleware, (req, res) => {
  res.json({ message: 'You accessed the protected route!', user: req.user });
});


app.get('/api/unprotected', (req, res) => {
  res.json({ message: 'You accessed the unprotected route!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
