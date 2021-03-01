const express = require('express')

const { postOrder, getAllOrders, patchOrderStatus, deleteOrder } = require('../controllers/orders')
const { authenticateToken } = require('../controllers/users')

var ordersRouter = express.Router()

ordersRouter.post('/', authenticateToken, postOrder)
ordersRouter.get('/', authenticateToken, getAllOrders)
ordersRouter.patch('/', authenticateToken, patchOrderStatus)
ordersRouter.delete('/:id', authenticateToken, deleteOrder)

module.exports = { ordersRouter }