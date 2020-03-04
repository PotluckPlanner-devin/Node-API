const express = require('express');

const cors = require('cors');
const helmet = require('helmet');
const restricted = require('../auth/restricted-middleware')

const authRouter = require('../auth/auth-router')
const userRouter = require('../routers/users/users-route')
const potluckRouter = require('../routers/potluck/potluck-route')
const foodRouter = require('../routers/food/food-router')
const userPotluckRouter = require('../routers/userPotluck/userPotluck-route')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/authentication', authRouter)
server.use('/api/users', restricted, userRouter)
server.use('/api/potluck', restricted, potluckRouter)
server.use('/api/food', foodRouter)
server.use('/api/user-potluck', userPotluckRouter)

server.get('/', (req, res) => {
    res.status(200).json({message: "Server is up and running"})
})

module.exports = server;