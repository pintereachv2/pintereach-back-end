const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan')

const authRouter = require('../auth/auth-routes.js')
const articleRouter = require('../articles/article-routes.js')
const { authenticate } = require('../auth/authenticate');

const { authenticate } = require('../auth/authenticate')

const server = express();

server.use(morgan('dev'))
server.use(helmet());
server.use(cors());
server.use(express.json());

// test endpoint
server.get('/', (req, res) => {
  res.status(200).json({message: 'server up!'})
})

server.use('/api', authRouter);
server.use('/api', authenticate, articleRouter);

module.exports = server;