const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Users', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;