const DataTypes = require("sequelize")

const UsersModel = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name_user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email_user: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone_user: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    address_user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password_user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}

module.exports = UsersModel

