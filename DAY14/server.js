const cache = {}; 
const cacheExpirationTime = 60000;

function cachingMiddleware(req, res, next) {
  const url = req.originalUrl; 

  if (cache[url] && cache[url].timestamp + cacheExpirationTime > Date.now()) {
    console.log(`Cache hit for ${url}`);
    return res.send(cache[url].data);
  }

  console.log(`Cache miss for ${url}`);

  res.sendResponse = res.send;
  res.send = (body) => {
    cache[url] = {
      data: body,
      timestamp: Date.now() 
    };
    res.sendResponse(body);
  };

  next(); 
}

const express = require('express');
const app = express();

app.use(cachingMiddleware);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
