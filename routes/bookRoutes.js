// routes/bookRoutes.js

const express = require('express');
const router = express.Router();

// GET /books - Responds with a list of books
router.get('/', (req, res) => {
  console.log('GET request received for /books');
  res.status(200).send('Here is the list of books!');
});

// POST /books - Adds a new book
router.post('/', (req, res) => {
  const bookData = req.body; // The data sent by the client

  console.log('POST request received for /books');
  console.log('Received book data:', bookData);

  // Respond with a "Created" status code
  res.status(201).send('Book has been added!');
});

module.exports = router;