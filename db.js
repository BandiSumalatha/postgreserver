const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hospital', 'default', 'fra26IlShGYc', {
  host: 'ep-patient-dew-453806-pooler.us-east-1.postgres.vercel-storage.com',
  dialect: 'postgres',
//   sslmode:'require'
});

module.exports = sequelize;