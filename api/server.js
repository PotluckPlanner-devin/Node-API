const express = require('express');

const cors = require('cors');
const helmet = require('helmet');
const restricted = require('../auth/restricted-middleware')

const authRouter = require('../auth/auth-router')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/authentication', authRouter)

server.get('/', (req, res) => {
    res.status(200).json({message: "Server is up and running"})
})

module.exports = server;