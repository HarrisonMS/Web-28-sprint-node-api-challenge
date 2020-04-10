const express = require('express');
const server = express();
const helmet = require('helmet');

server.use(helmet());
server.use(express.json());



server.get('/', (req, res) => {
  res.send('server is up and running you may continue')
})

module.exports = server