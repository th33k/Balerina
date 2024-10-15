const express = require('express');
const Tasker = require('../models/Tasker');
const router = express.Router();

// Create a new tasker
router.post('/', async (req, res) => {
  try {
    const newTasker = new Tasker(req.body);
    const savedTasker = await newTasker.save();
    res.status(201).json(savedTasker);
  } catch (err) {
    res.status(500).json({ message: 'Error creating tasker', error: err });
  }
});

// Get all taskers
router.get('/taskers', async (req, res) => {
  try {
    const taskers = await Tasker.find();
    res.status(200).json(taskers);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving taskers', error: err });
  }
});

module.exports = router;
