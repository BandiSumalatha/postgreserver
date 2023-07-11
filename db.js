const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Hospital', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;