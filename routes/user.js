'use strict'

const router = require('express').Router();
const modelManager = require('../database/model-manager');
const User = require('../models/user')

router.get('/', (req, res) => {
   const md = new modelManager(User);
   var users = md.all();
   users.then(user => {
     res.json({users: user})
   })
   .catch(err => console.log(err))
})

router.post('/', (req, res) => {
	res.sendStatus(200);
})

module.exports = router;
