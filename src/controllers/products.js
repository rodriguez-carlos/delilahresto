const { addProduct, readAllProducts, readProductById, modifyProduct, dropProduct } = require("../use-cases/products")

async function postProduct (req, res) {
     try {
      if (req.user.is_admin === true) {
         const result = await addProduct(req.body)
         res.json({response: result})
      } else {
         throw {message: "User is not admin"}
      }
     } catch(err) {
         res.status(400)
            .json({response: err.message})
     }
}
async function getAllProducts (req, res) {
   try {
      const result = await readAllProducts()
      res.json({response: result})
   } catch (err) {
      res.status(400)
         .json({response: err.message})
   }
}

async function getProductById (req, res) {
   try {
      const result = await readProductById(req.params.id)
      res.json({response: result})
   } catch (err) {
      res.status(400)
         .json({response: err.message})
   }
}

async function patchProduct (req, res) {
   try {
      if (req.user.is_admin === true) {
         const result = await modifyProduct(req.body, req.params.id)
         res.json({response: `Product was modified`})
      } else {
         throw {message: "User is not admin"}
      }
   } catch (err) {
      res.status(400)
         .json({response: err.message})
   }
}

async function deleteProduct (req, res) {
   try {
      if (req.user.is_admin === true) {
         const result = await dropProduct(req.params.id)
         res.json({response: `Product was deleted.`})
      } else {
         throw {message: "User is not admin"}
      }
   } catch(err) {
      res.status(400)
         .json({response: err.message})
   }
}

module.exports = { postProduct, getAllProducts, getProductById, patchProduct, deleteProduct }