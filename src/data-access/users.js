const { Users } = require('../../db-connection')

const createUser = async (data) => {
    try {
        const newUser = await Users.create(data)
        return newUser
    } catch (err) {
        console.log("Error en el data access")
        throw new Error(err)
    }
}

const retrieveUserById = async (userId) => {
    try {
        const userById = await Users.findByPk(userId)
        return userById
    } catch (err) {
        throw new Error(err)
    }
}

const destroyUser = async (userId) => {
    try {
        const destroyedUser = await Users.destroy( { where: { id: userId } } )
        return destroyedUser
    } catch(err) {
        throw new Error(err)
    }
}

const retrieveUserByEmail = async (email) => {
    try {
        const userByEmail = await Users.findOne( { where: { email_user: email } } )
        if (userByEmail === null) {
            return "No se pudo encontrar el usuario"
        } else {
            return userByEmail
        }        
        } catch (err) {
            throw new Error(err)
    }
}



module.exports = { createUser, destroyUser, retrieveUserById, retrieveUserByEmail }