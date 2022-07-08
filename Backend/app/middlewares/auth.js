const jwt = require('jsonwebtoken')
const { Users } = require("../database/models/User")
const errors = require("../helpers/error.messages")
const httpCodes = require("../helpers/httpCodes.messages")

const { auth } = require("../../config/db.config")
const getInvalidError = (res) =>{
    res.status(httpCodes.UNAUTHORIZED).json({message: errors.token.expiredOrInvalid})
}

// module.exports = async  (req,res,next) =>{
//     const token = req.headers.authorization;
//     if (!token) return res.status(httpCodes.UNAUTHORIZED).json({ message: errors.token.notFound})
//     try{
//         const {data} = jwt.verify(token,auth)
//         const user = await  Users.findOne({ where: {email: data.email, id: data.id}})
//         if (!user) return getInvalidError(res)
//         req.user = user
//         next()
//     }catch (e) {
//         if (e.name === 'JsonWebTokenError') return getInvalidError(res);
//
//         console.log(e.message);
//         return res.status(httpCodes.INTERNAL_SERVER_ERROR).json({ message: errors.internal });    }
// }


