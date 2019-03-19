const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/auth-routes.js')
const articleRouter = require('../articles/article-routes.js')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api', authRouter);
server.use('/api', articleRouter);

module.exports = server;