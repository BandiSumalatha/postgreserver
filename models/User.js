const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define(
  'user',
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    // ...
  },
  {
    // Other options for the model
  }
);

module.exports = User;
