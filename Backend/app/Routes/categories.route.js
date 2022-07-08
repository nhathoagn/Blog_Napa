const express = require('express')
const validateToken = require('../middlewares/validateToken')
const controllers = require('../Controllers/categories.controller')

const categoriesRoute = express.Router();

categoriesRoute.post('/', validateToken, controllers.create);
categoriesRoute.get('/', validateToken, controllers.getAll)

module.exports = categoriesRoute
