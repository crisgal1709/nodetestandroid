'use strict'

const SQ = require('sequelize');
const sequelize = require('../database/')

const User = sequelize.define('user', {
  id: {
    type: SQ.INTEGER,
   primaryKey: true
 },
 name: {
   type: SQ.STRING
 },
 email: {
   type: SQ.STRING
 },
 password: {
   type: SQ.STRING
 }
}, {
 timestamps: false
})

module.exports = User;
