const jwt = require('jsonwebtoken')
const {User} = require('../database/models')
const secretkey = require('../../config/db.config')
const httpCode = require('../helpers/httpCodes.messages')
const error = require('../helpers/error.messages')
const validateToken = async (req, res, next) => {
  try {
      const token = req.headers.authorization;
      if (!token) return res.status(httpCode.UNAUTHORIZED).json(error.token.notFound)
      const decoded = jwt.verify(token, secretkey.auth);
      const exists = await  User.findOne({ where:{ email: decoded.data.email}})
        if (!exists) return res.status(httpCode.UNAUTHORIZED).json(error.token.expiredOrInvalid)
      req.userID = exists.id;
        next();
  }catch (e) {
     return res.status(httpCode.UNAUTHORIZED).json(error.token.expiredOrInvalid)
  }
}
module.exports = validateToken
