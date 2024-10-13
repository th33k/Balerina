const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Create a new user
router.post('/users', async (req, res) => {
  try {
    console.log('Received registration data:', req.body); // Log received data
    const user = new User(req.body);
    await user.save();
    console.log('User registered:', user); // Log saved user
    res.status(201).send(user);
  } catch (error) {
    console.error('Error registering user:', error); // Log error
    res.status(400).send(error);
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;