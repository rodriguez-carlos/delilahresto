const DataTypes = require('sequelize')

const ProductsModel = {
    name_product: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price_product: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}

module.exports = ProductsModel
