const express = require('express')
const { Sequelize } = require('sequelize')
const bcrypt = require('bcrypt')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
})