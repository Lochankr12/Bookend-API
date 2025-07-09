// server.js

const express = require('express');
const bookRoutes = require('./routes/bookRoutes'); // Import the router

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON data
app.use(express.json());

// Tell Express to use the bookRoutes for any endpoint starting with /books
app.use('/books', bookRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Open your browser or API tester to interact with the server.');
});