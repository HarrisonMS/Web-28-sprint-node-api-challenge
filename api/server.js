const express = require('express');
const server = express();
const helmet = require('helmet');
const{ logger } = require('../data/helpers/logger')
const projectRouter = require('../routes/projects-router');

server.use(helmet());
server.use(logger)
server.use(express.json());

server.use('/api/projects', projectRouter)

server.get('/', (req, res) => {
  res.send('server is up and running you may continue')
})

module.exports = server