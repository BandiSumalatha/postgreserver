const express = require('express');
const sequelize = require('./db');
const userRoutes = require('./routes/userRoute');


const app = express();

app.use(express.json());

app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;



sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`)
      
    })
  })
  .catch((error) => {
    console.error('Error connecting to database', error);
  });
