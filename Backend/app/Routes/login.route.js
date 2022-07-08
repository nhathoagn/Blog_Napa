const express = require('express')
const login = require('../Controllers/login.controller')

const loginRouter = express.Router()
loginRouter.post('/', login.login)
module.exports = loginRouter
