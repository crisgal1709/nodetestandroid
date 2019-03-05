'use strict'

const router = require('express').Router();
const modelManager = require('../database/model-manager');
const User = require('../models/user')
const md = new modelManager(User);

router.get('/', (req, res) => {
   var users = md.all();
   users.then(user => {
     res.json({users: user})
   })
   .catch(err => console.log(err))
})

router.get('/:id', (req, res) => {
	const { id } = req.params;
	const user = md.byId(id);
	user.then((us) => {
		if (!us) {
			return res.sendStatus(404)
		}

		return res.json({user: us});
		
	})
	.catch(err => {
		console.log(err)
		return res.sendStatus(404);
	})
	
})

router.post('/', (req, res) => {
	res.sendStatus(200);
})

module.exports = router;
