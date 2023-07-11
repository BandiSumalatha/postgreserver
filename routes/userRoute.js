const express = require('express');
const User = require('../models/User');

const router = express.Router();

User.sync({forc:true})
// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    console.log(users)
    res.send(users);
  } catch (error) {
    console.error('Error retrieving users', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
router.post('/users', async (req, res) => {
  try {
    const { username,age,email } = req.body;
    const newUser = await User.create({ username, age, email });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
module.exports = router;