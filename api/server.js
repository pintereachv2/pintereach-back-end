const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/auth-routes.js')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// test endpoint
server.get('/', (req, res) => {
  res.status(200).json({message: 'server up!'})
})

server.use('/api', authRouter);

module.exports = server;