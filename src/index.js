// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Define a port number
const PORT = process.env.PORT || 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
