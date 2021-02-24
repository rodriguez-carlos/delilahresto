const { saveProduct, retrieveAllProducts, retrieveProductById, updateProduct, destroyProduct } = require("../data-access/products")

async function addProduct (data) {
    try {
        const result = await saveProduct(data)
        return result
    } catch (err) {
        throw new Error(err)
    }
}

async function readAllProducts () {
    try {
        const result = await retrieveAllProducts()
        return result
    } catch (err) {
        throw new Error(err)
    }
}

async function readProductById (productId) {
    try {
        const result = await retrieveProductById(productId)
        if (result === null) {
            return "El producto no existe"
        }
        return result
    } catch (err) {
        throw new Error(err)
    }
}

async function modifyProduct (data, productId) {
    try {
        const validation = await retrieveProductById(productId)
        if (validation === null) {
            return "El producto no existe"
        } else {
            const result = await updateProduct(data, productId)
            return result 
        }
    } catch (err) {
        throw new Error(err)
    }
}

async function dropProduct (productId) {
    try {
        const validation = await retrieveProductById(productId)
        if (validation === null) {
            return "El producto no existe"
        } else {
            const result = await destroyProduct(productId)
            return result 
        }
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = { addProduct, readAllProducts, readProductById, modifyProduct, dropProduct }