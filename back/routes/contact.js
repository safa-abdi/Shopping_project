// routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

// POST /api/ajoutContact - Add a new contact
router.post('/ajoutContact', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill all fields' });
  }

  // Create a new contact document
  const newContact = new Contact({
    name,
    email,
    message,
  });

  try {
    // Save the contact to the database
    await newContact.save();
    res.status(201).json({ message: 'Contact added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add contact' });
  }
});

module.exports = router;
