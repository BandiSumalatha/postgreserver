const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define(
  'users',
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

    // ...
  },
  {
    tableName: 'users', // Custom table name
    // other options...
  }
);

module.exports = User;
