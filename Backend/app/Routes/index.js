const express = require('express')
const categoriesRoute = require('./categories.route')
const loginRoute = require('./login.route')
const userRoute = require('./user.route')
const postRoute = require('./post.route')

const router = express.Router();

router.use('/login', loginRoute)
router.use('/user', userRoute)
router.use('/categories', categoriesRoute)
router.use('/post', postRoute)

module.exports = router
