const path = require('path')
const express = require('express')

const api = require('./api')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api', api)

module.exports = server