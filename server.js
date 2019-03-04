'use strict'

require('dotenv').config()
const express = require('express')
var appExpress = express()
const db = require('./database')
const path = require('path')
const configureApp = require('./core/configuration')

const app = configureApp(appExpress);

const port = Number(process.env.PORT | process.env.PROJECT_PORT | 3000)

app.get('/', (req, res) => {
    res.status(200).send('Hola, Mundo NodeJs - Android') 
})

app.listen(port, () => {
   console.log(`Server Runing in port ${port}`)
})


