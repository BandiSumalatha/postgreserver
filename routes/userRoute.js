const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/users', async (req, res) => {
const pageNumber=Number.parseInt(req.query.page)
const sizeNumber=Number.parseInt(req.query.size)
if(!Number.isNaN(pageNumber)&& pageNumber>0){
   page=pageNumber;
}
if(!Number.isNaN(sizeNumber)&& sizeNumber>0){
size=sizeNumber
}

  try {
    const users = await User.findAndCountAll({limit:size,offset:page*size});
    res.send({content:users,totalPages:Math.ceil(users.count/size)});
  } catch (error) {
    console.error('Error retrieving resources', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Get all users
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