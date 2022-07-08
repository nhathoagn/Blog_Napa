const express = require('express')
const controller = require('../Controllers/user.controller')
const validateToken = require('../middlewares/validateToken')

const userRouter = express.Router()

userRouter.post('/signup', controller.createUser);
userRouter.get('/account', validateToken, controller.getAll)
userRouter.get('/:id', validateToken, controller.getByID)
userRouter.delete('/me', validateToken, controller.remove)
userRouter.get("/search", validateToken,controller.search)
module.exports = userRouter
