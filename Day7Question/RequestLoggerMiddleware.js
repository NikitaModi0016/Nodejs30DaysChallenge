const express = require('express');
const app = express();


function requestLoggerMiddleware(req, res, next) {
  // Get current timestamp
  const timestamp = new Date().toISOString();

  // Log the timestamp and HTTP method of the incoming request
  console.log(`${timestamp} - ${req.method} request received`);

  // Call next middleware in the chain
  next();
}

// Register middleware
app.use(requestLoggerMiddleware);

// Define routes
app.get('/', (req, res) => {
  res.send('Scaler 30DaysNodejsChallenge');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

  