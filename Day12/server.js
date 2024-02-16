const express = require('express');
const app = express();

const RATE_LIMIT = 10;
const requestCounts = {};

function rateLimitMiddleware(req, res, next) {
    const clientIP = req.ip;

    // Initialize request count for the client if it's not already set
    if (!requestCounts[clientIP]) {
        requestCounts[clientIP] = 0;
    }

    // Increment the request count for the client
    requestCounts[clientIP]++;

    // Check if the request count exceeds the rate limit
    if (requestCounts[clientIP] > RATE_LIMIT) {
        return res.status(429).send('Too Many Requests');
    }

    // Allow the request to proceed
    next();
}

// Reset request counts after a certain time period (e.g., every minute)
setInterval(() => {
    for (const clientIP in requestCounts) {
        requestCounts[clientIP] = 0;
    }
}, 60000); // Reset counts every 60 seconds

app.use(rateLimitMiddleware);

app.get('/', (req, res) => {
    const clientIP = req.ip;
    const currentCount = requestCounts[clientIP] || 0;
    res.send(`Hello, world! Current Count=${currentCount}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
