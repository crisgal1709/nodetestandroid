'use strict'

const express = require('express')
const app = express()
const router = express.Router();

const port = Number(3000)

app.get('/', (req, res) => {
    res.status(200).send('Hola, Mundo NodeJs - Android') 
})

app.listen(port, () => {
   console.log(`Server Runing in port ${port}`)
})

router.get('/users', (req, res) => {
   res.json({
      users: []
   })
})

router.get('/posts', (req, res) => {
   res.json({
      posts: []
   })
})

router.get('/', function(req, res){
 res.sendStatus(200)
})

app.use('/api', router);
