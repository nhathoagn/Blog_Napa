const jwt = require('jsonwebtoken')
const { auth } = require('../../config/db.config')
const jwtConfig = {
    expiresIn: '3000ms',
    algorithm: 'HS256'
}
const generateJWT = (payload) => {
    const token = jwt.sign({ data: payload}, auth.secret, jwtConfig)
    return token
}
module.exports = generateJWT
