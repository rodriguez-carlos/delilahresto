const { Orders, OrderProducts } = require('../../db-connection')
const { retrieveProductById } = require('../data-access/products')
const { retrieveUserById } = require('./users')

const saveOrder = async (data) => {
    try {
        const newOrder = await Orders.create(data)
        const products = data.products
        const idOrder = newOrder.id
        products.forEach((product) => OrderProducts.create( { id_product: product.id_product, id_order: idOrder, quantity: product.quantity } ) )
        return newOrder
    } catch(err) {
        throw err
    }
}

const retrieveAllOrders = async (userId, isAdmin) => {
    try {
        const allOrders = await Orders.findAll()
        let ordersWithProducts = await Promise.all(allOrders.map(async (order) => {
            const orderCopy = {
                id: order.id, 
                time_order: order.time_order, 
                status_order: order.status_order, 
                payment_method_order: order.payment_method_order,
                total_order: order.total_order,
                id_user: order.id_user
            }
            const orderProducts = await retrieveProductsFromOrder(order.id)
            let productsWithNamesAndPrices = await Promise.all(orderProducts.map(async (orderProduct) => {
                const productData = await retrieveProductById(orderProduct.id_product)
                const product = {
                    id: orderProduct.id_product,
                    name_product: productData.name_product,
                    price_product: productData.price_product,
                    quantity: orderProduct.quantity
                }
                return product
            }))
            const userData = await retrieveUserById(orderCopy.id_user)
            orderCopy.products = productsWithNamesAndPrices
            orderCopy.user = {
                name_user: userData.name_user,
                address_user: userData.address_user
            }
            return orderCopy
        })) 
        const authorizedOrders = ordersWithProducts.filter(orderWithProduct => orderWithProduct.id_user === userId)
        if (isAdmin === false) {
            return authorizedOrders
        } else {
            return ordersWithProducts 
        }
    } catch (err) {
        throw new Error(err)
    }
}

const retrieveProductsFromOrder = async (idOrder) => {
    try {
        const productsFromOrder = await OrderProducts.findAll( { where: { id_order: idOrder } } )
        return productsFromOrder
    } catch (err) {
        throw new Error(err)
    }
}

const retrieveOrderById = async (orderId) => {
    try {
        const orderById = await Orders.findByPk(orderId)
        return orderById
    } catch (err) {
        throw new Error(err)
    }
}

const updateOrderStatus = async (newStatus, orderId) => {
    try {
        const updatedStatus = await Orders.update(
            {status_order: newStatus}, 
            {where: 
                { id: orderId } 
            } 
            )
        return updatedStatus
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = { saveOrder, retrieveAllOrders, retrieveProductsFromOrder, retrieveOrderById, updateOrderStatus }