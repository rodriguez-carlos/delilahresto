const express = require('express')

const { postProduct, getAllProducts, getProductById, patchProduct, deleteProduct } = require("../controllers/products")
const { authenticateToken } = require('../controllers/users')

var productsRouter = express.Router()

productsRouter.post('/', authenticateToken, postProduct)
productsRouter.get('/', authenticateToken, getAllProducts)
productsRouter.get('/:id', authenticateToken, getProductById)
productsRouter.patch('/:id', authenticateToken, patchProduct)
productsRouter.delete('/:id', authenticateToken, deleteProduct)

module.exports = { productsRouter }