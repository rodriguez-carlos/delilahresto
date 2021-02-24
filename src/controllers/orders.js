const { addOrder, readAllOrders, readProductsFromOrder, modifyOrderStatus } = require('../use-cases/orders')

async function postOrder (req, res) {
    try {
       const result = await addOrder(req.body)
       res.json( { response: result } )
    } catch(err) {
        console.log(err)
        res.status(400)
           .json( { response: err.message } )
    }
}

async function getAllOrders (req, res) {
    try {
        const result = await readAllOrders(req.user.id, req.user.is_admin)
        res.json( { response: result } )
    } catch (err) {
        res.status(400)
            .json( { response: err.message } )
    }
}

async function getProductsFromOrder (req, res) {
    try {
        const result = await readProductsFromOrder(req.params.id)
        res.json( { response: result } )
    } catch(err) {
        res.status(400)
            .json( { response: err.message } )
    }
}

async function patchOrderStatus (req, res) {
    try {
        if (req.user.is_admin === true) {
            await modifyOrderStatus(req.body.status_order, req.body.id)
            res.json( { response: 'El estado de la orden es ahora: ' + req.body.status_order})
        } else {
            throw {message: 'No se tienen permisos de administrador'}
        }
    } catch(err) {
        res.status(400)
            .json( { response: err.message})
    }
}

module.exports = { postOrder, getAllOrders, getProductsFromOrder, patchOrderStatus }