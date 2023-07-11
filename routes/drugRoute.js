const express = require('express');
const Drugs=require("../models/Drug")
const router = express.Router();

// Get all items
router.get('/items', async (req, res) => {
  try {
    const items = await Drugs.findAll();
    res.json(items);
  } catch (error) {
    console.error('Error retrieving items', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
module.exports = router;
