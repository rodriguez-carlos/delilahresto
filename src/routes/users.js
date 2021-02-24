const express = require('express')

const { postUser, getUserById, deleteUser, userAuth, authenticateToken } = require('../controllers/users')

var usersRouter = express.Router()

usersRouter.post('/', postUser)
usersRouter.get('/:id', authenticateToken, getUserById)
usersRouter.delete('/:id', authenticateToken, deleteUser)
usersRouter.post('/login', userAuth)

module.exports = { usersRouter }