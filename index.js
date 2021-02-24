const express = require('express')
const bodyParser = require('body-parser')
const { sequelize, OrderProducts, Orders } = require('./db-connection')
const { productsRouter } = require('./src/routes/products')
const { usersRouter } = require('./src/routes/users')
const { ordersRouter } = require('./src/routes/orders')

const app = express()
const port = 3310

Orders.sync( { alter: true } )
sequelize.sync()

app.use(bodyParser.json())
app.use('/products', productsRouter)
app.use('/users', usersRouter)
app.use('/orders', ordersRouter)

app.listen(port, () => {
    console.log(`Server is live on port ${port}`)
})