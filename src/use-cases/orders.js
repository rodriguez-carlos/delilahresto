const { saveOrder, retrieveAllOrders, retrieveProductsFromOrder, retrieveOrderById, updateOrderStatus } = require('../data-access/orders')
const { retrieveProductById } = require('../data-access/products')

async function addOrder (data, userId) {
    try {
        data.total_order = await totalizeOrder(data)
        data.id_user = userId
        const result = await saveOrder(data, userId)
        return result
    } catch (err) {
        throw err
    }
}

async function totalizeOrder (data) {
    try {
        const products = data.products
        let totals = await Promise.all(products.map(async (product) => {
            let product_db = await retrieveProductById(product.id_product)
            return product_db.price_product * product.quantity
        }))
        let totalInOrder = 0
        totals.forEach((eachTotal) => {
            totalInOrder += eachTotal
            return totalInOrder
        })
        return totalInOrder
    } catch (err) {
        throw err
    }
}

async function readAllOrders (userId, isAdmin) {
    try {
        const result = await retrieveAllOrders(userId, isAdmin)
        return result
    } catch (err) {
        throw new Error(err)
    }
}

async function readProductsFromOrder (orderId) {
    try {
        const result = await retrieveProductsFromOrder(orderId)
        return result
    } catch(err) {
        throw (err)
    }
}

async function modifyOrderStatus (newStatus, orderId) {
    try {
        const validation = await retrieveOrderById(orderId)
        if (validation === null) {
            return "La orden no existe"
        } else {
            const result = await updateOrderStatus(newStatus, orderId)
            return result 
        }
    } catch (err) {
        throw new Error(err)
    }
}


module.exports = { addOrder, readAllOrders, readProductsFromOrder, modifyOrderStatus }