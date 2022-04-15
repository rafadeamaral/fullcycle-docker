const express = require('express')
const app = express()
const port = 3000
const mysql = require('./db')
const people = require('./people')

mysql.init();

app.get('/', people)

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})