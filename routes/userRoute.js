const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/users', async (req, res) => {
const pageAsNumber=Number.parseInt(req.query.page)
const sizeAsNumber=Number.parseInt(req.query.size)
let page=0;
if(!Number.isNaN(pageAsNumber)&& pageAsNumber>0){
   page=pageAsNumber;
}
let size;
if(!Number.isNaN(sizeAsNumber)&& sizeAsNumber>0 ){
size=sizeAsNumber
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