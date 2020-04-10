const express = require('express');
const server = express();
const helmet = require('helmet');
const { loggerMid } = require('../data/helpers/loggerMid')
const projectRouter = require('../routes/projects-router');

server.use(helmet());
server.use(loggerMid)
server.use(express.json());

server.use('/api/projects', projectRouter)

server.get('/', (req, res) => {
  res.send('server is up and running you may continue')
})

module.exports = server