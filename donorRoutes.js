const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.get('/', async (req, res) => {
  const donors = await User.find();
  res.json(donors);
});

router.get('/search', async (req, res) => {
  try {
    const { bloodGroup, city } = req.query;

    const donors = await User.find({
      bloodGroup,
      city,
      available: true
    });

    res.json(donors);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;