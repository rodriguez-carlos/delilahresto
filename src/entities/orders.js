const { Sequelize } = require("sequelize")
const DataTypes = require("sequelize")

const OrdersModel = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    time_order: {
        type: DataTypes.TIME,
        defaultValue: Sequelize.NOW,
        allowNull: false
    },
    status_order: {
        type: DataTypes.ENUM,
        values: ['new', 'confirmed', 'processing', 'on delivery', 'cancelled', 'delivered'],
        validate: {
            isIn: {
              args: [
                ['new', 'confirmed', 'processing', 'on delivery', 'cancelled', 'delivered']
              ],
              msg: 'order status is not valid, please choose from: new, confirmed, processing, on delivery, cancelled, delivered'
            }
          },
        defaultValue: "new",
        allowNull: false
    },
    payment_method_order: {
        type: DataTypes.ENUM,
        values: ['cash', 'card upon delivery', 'card online'],
        validate: {
            isIn: {
              args: [
                ['cash', 'card upon delivery', 'card online']
              ],
              msg: 'payment method is not valid, please choose from: cash, card upon delivery, card online'
            }
          },
        allowNull: false
    },
    total_order: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    }
}

module.exports = OrdersModel