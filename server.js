'use strict'

require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./database');
const path = require('path')

const port = Number(process.env.PORT || process.env.PROJECT_PORT)



app.get('/', (req, res) => {
    res.status(200).send('Hola, Mundo NodeJs - Android') 
})

app.listen(port, () => {
   console.log(`Server Runing in port ${port}`)
})

app.use('/api/users', require('./routes/user'));
