const Sequelize = require('sequelize')
const ProductsModel = require('./src/entities/products')
const UsersModel = require('./src/entities/users')
const OrdersModel = require('./src/entities/orders')
const OrderProductsModel = require('./src/entities/orderproducts')

const sequelize = new Sequelize('mysql://root:@localhost:3306/delilah_db')

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