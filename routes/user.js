'use strict'

const router = require('express').Router();

router.get('/', (req, res) => {
   res.json({
      users: []
   });
})

module.exports = router;
