'use strict'

const sequelize = require('../database/')

const User = sequelize.define('user', {
    id: {
	type: 'string',
	primaryKey: true
    },
    name: {
	type: 'string'
   },
    email: {
	type: 'string'
    },
    password: {
	type: 'string'
   }
}, {
   timestamps: false
})

module.exports = User;
