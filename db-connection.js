const Sequelize = require('sequelize')
const ProductsModel = require('./src/entities/products')
const UsersModel = require('./src/entities/users')
const OrdersModel = require('./src/entities/orders')
const OrderProductsModel = require('./src/entities/orderproducts')
const { dbConfig } = require('./db-config')

const sequelize = new Sequelize(`mysql://${dbConfig.db_user}:${dbConfig.db_password}@localhost:${dbConfig.db_port}/${dbConfig.db_name}`)

const Products = sequelize.define("Products", ProductsModel, { timestamps: false })
const Users = sequelize.define("Users", UsersModel, { timestamps: false })
const Orders = sequelize.define("Orders", OrdersModel, { timestamps: false })
const OrderProducts = sequelize.define("OrderProducts", OrderProductsModel, { timestamps: false })


module.exports = {
    sequelize,
    Products,
    Users,
    Orders,
    OrderProducts
}