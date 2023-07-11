const express = require('express');
const sequelize = require('./db');
// const drugRoute=require("./routes/drugRoute")
const app = express();

app.use(express.json());
// app.use('/api', drugRoute);

const PORT = process.env.PORT;

sequelize.authenticate()
  
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to database', error);
  });
