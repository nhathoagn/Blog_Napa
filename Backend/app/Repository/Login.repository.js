const { User } = require('../database/models')
const generateToken = require('../utils/gennerateJWT')
const httpCodes = require("../helpers/httpCodes.messages");
const errors = require("../helpers/error.messages");
const Joi = require("joi");

const getInternalError = (status, message) =>({
    status, message
})
const login = async (body) =>{
    if (!body.email || body.password ) throw getInternalError(httpCodes.BAD_REQUEST, errors.posts.require)
    try {
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().length(8).required()
        }).validate({email, password})
        if (schema.error) return {error: schema.error}
        const exists = await User.findOne({
            where: { email: body.email, password: body.password}
        })
        if (!exists) throw getInternalError(httpCodes.BAD_REQUEST, errors.login.invalidFields)
        const { dataValues } = exists
        const token = generateToken(dataValues)
        return token
    }catch (e){
        console.log(error.message)
        return { error: {code: httpCodes.INTERNAL_SERVER_ERROR, message: errors.internal}}
    }

}
module.exports = {
    login
}
