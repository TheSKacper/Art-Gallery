const express = require('express')
const {createUser,deleteUser,userLogin,getAllUser} = require('../controllers/userController.js')
const app = express.Router()

app.post('/',createUser)
app.get('/',getAllUser)
app.delete('/',deleteUser)
app.post('/login',userLogin)

module.exports = app
