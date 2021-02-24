const express = require('express')

const { postOrder, getAllOrders, getProductsFromOrder, patchOrderStatus } = require('../controllers/orders')
const { authenticateToken } = require('../controllers/users')

var ordersRouter = express.Router()

ordersRouter.post('/', authenticateToken, postOrder)
ordersRouter.get('/', authenticateToken, getAllOrders)
ordersRouter.patch('/', authenticateToken, patchOrderStatus)

module.exports = { ordersRouter }