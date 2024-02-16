
function loggingMiddleware(req, res, next) {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.url;
    const headers = req.headers;
    let body = '';

    if (req.body) {
      body = JSON.stringify(req.body);
    }
    console.log(`[${timestamp}] ${method} ${url}`);
    console.log('Headers:', headers);
    console.log('Body:', body);
  
    next(); 
  }
  const express = require('express');
  const app = express();

  app.use(express.json()); 
  app.use(loggingMiddleware);
  
  app.get('/', (req, res) => {
    res.send('Hello, world!');
  });
  
  const port = 5000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  