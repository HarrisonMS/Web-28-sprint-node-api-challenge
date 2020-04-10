const express = require('express');
const server = express();
const helmet = require('helmet');
const projectRouter = require('../routes/projects-router');

server.use(helmet());
server.use(express.json());

server.use('api/projects', projectRouter)

server.get('/', (req, res) => {
  res.send('server is up and running you may continue')
})

module.exports = server