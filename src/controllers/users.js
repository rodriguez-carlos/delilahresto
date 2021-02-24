require('dotenv').config()

const { addUser, readUserById, dropUser, login } = require('../use-cases/users')
const bcrypt = require('bcrypt')
const { retrieveUserByEmail } = require('../data-access/users')
const jwt = require('jsonwebtoken')

async function postUser (req, res) {
   try {
      const newUser = req.body
      const salt = await bcrypt.genSalt()
      const hashedPassword = await bcrypt.hash(newUser.password_user, salt)
      newUser.password_user = hashedPassword
      const result = await addUser(newUser)
      res.json({response: result})
   } catch (err) {
      res.status(400)
         .json({response: err.message})
    }
}

async function getUserById (req, res) {
    try {
      if ((req.user.is_admin === true) || (req.user.id == req.params.id)) {
         const result = await readUserById(req.params.id)
       res.json({response: result})
      } else {
         throw {message: 'User is not admin'}
      }
       
    } catch (err) {
       res.status(400)
          .json({response: err.message})
    }
 }

 async function deleteUser (req, res) {
    try {
       const result = await dropUser(req.params.id)
       res.json({response: `User with id:${req.params.id} has been eliminated.`})
    } catch(err) {
       res.status(400)
          .json({response: err.message})
    }
 }

 async function userAuth (req, res) {
    try {
       const user = await retrieveUserByEmail(req.body.email_user)
       if (await bcrypt.compare(req.body.password_user, user.password_user)) {
         console.log("password match")
         const accessToken = jwt.sign(JSON.stringify(user), process.env.ACCESS_TOKEN_SECRET)
         res.json({ accessToken: accessToken })
       } else {
         res.json({ response: 'Login not possible' })
       }
    } catch (err) {
       res.status(500)
    }
 }

function authenticateToken(req, res, next) {
   const authHeader = req.headers['authorization']
   const token = authHeader && authHeader.split(' ')[1]
   if (token === null) return res.sendStatus(401)

   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if(err) return res.sendStatus(403)
      req.user = user
      next()
   })
 }

module.exports = { postUser, getUserById, deleteUser, userAuth, authenticateToken }