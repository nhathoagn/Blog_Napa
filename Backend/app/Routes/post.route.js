const express = require('express')
const validateToken = require('../middlewares/validateToken')
const controllers = require('../Controllers/post.controller')
const  postsRouter = express.Router();

postsRouter.post('/', validateToken, controllers.createPost);
postsRouter.get('/', validateToken, controllers.getAll)
postsRouter.get('/:id', validateToken, controllers.getbyID)
postsRouter.put('/:id', validateToken, controllers.update);
postsRouter.delete('/:id', validateToken, controllers.remove)

module.exports = postsRouter
