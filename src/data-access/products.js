const { Products } = require("../../db-connection")

const saveProduct = async (data) => {
    try {
        const newProduct = await Products.create(data)
        return newProduct
    } catch (err) {
        throw new Error(err)
    }
}

const retrieveAllProducts = async () => {
    try {
        const allProducts = await Products.findAll()
        return allProducts
    } catch (err) {
        throw new Error(err)
    }
}

const retrieveProductById = async (productId) => {
    try {
        const productById = await Products.findByPk(productId)
        return productById
    } catch (err) {
        throw new Error(err)
    }
}

const updateProduct = async (data, productId) => {
    try {
        const updatedProduct = await Products.update(data, { where: { id: productId } } )
        return updatedProduct
    } catch (err) {
        throw new Error(err)
    }
}

const destroyProduct = async (productId) => {
    try {
        const deletedProduct = await Products.destroy( { where: { id: productId} } )
        console.log("deleted product: " + deletedProduct)
        return deletedProduct
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = {
    saveProduct,
    retrieveAllProducts,
    retrieveProductById,
    updateProduct,
    destroyProduct
}