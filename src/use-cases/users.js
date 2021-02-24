const { createUser, destroyUser, retrieveUserById, userLogin } = require('../data-access/users')
const bcrypt = require('bcrypt')

async function addUser (data) {
    try {
        const result = await createUser(data)
        return result 
    } catch (err) {
        console.log("Error en el use-case")
        throw new Error(err)
    }
}

async function readUserById (productId) {
    try {
        const result = await retrieveUserById(productId)
        if (result === null) {
            return "El usuario no existe"
        }
        return result
    } catch (err) {
        throw new Error(err)
    }
}

async function dropUser (productId) {
    try {
        const validation = await retrieveUserById(productId)
        if (validation === null) {
            return "El usuario no existe"
        } else {
            const result = await destroyUser(productId)
            return result
        }
    } catch (err) {
        throw new Error(err)
    }
}


module.exports = { addUser, readUserById, dropUser }