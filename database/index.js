'use strict'

const Sequelize = require('sequelize');
const host = process.env.DB_HOST || 'localhost'
const db = process.env.DB_DATABASE || 'prueba'
const username = process.env.DB_USERNAME || 'root'
const password = process.env.DB_PASSWORD || ''
const driver = process.env.DB_DRIVER || 'mysql'

const sequelize = new Sequelize(db, username, password, {
  host: host,
  dialect: driver,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

sequelize.authenticate()
   .then()
   .catch()

module.exports = sequelize;
