

const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');


function setupWebSocket(server) {
 
  const wss = new WebSocket.Server({ server });

  
wss.on('connection', function connection(ws) {
    console.log('A new client connected');
  
    
    ws.on('message', function incoming(data) {
      if (typeof data === 'string') {
        console.log('Received:', data);
  
        wss.clients.forEach(function each(client) {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(data);
          }
        });
      } else if (data instanceof Buffer) {
        console.log('Received Buffer:', data);
  
        
        wss.clients.forEach(function each(client) {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(data);
          }
        });
      } else {
        console.log('Received data of unrecognized type:', data);
      }
    });
  
    // Handle WebSocket closure
    ws.on('close', function close() {
      console.log('Client disconnected');
    });
  });
  
}

// Create Express app
const app = express();

// Set up a basic route for serving HTML page with WebSocket connection
app.get('/websocket', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Create an HTTP server instance
const server = http.createServer(app);

// Set up WebSocket server alongside the Express server
setupWebSocket(server);

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
