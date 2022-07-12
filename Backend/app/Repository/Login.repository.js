const { User } = require('../database/models')
const generateToken = require('../utils/gennerateJWT')
const httpCodes = require("../helpers/httpCodes.messages");
const errors = require("../helpers/error.messages");
const Joi = require("joi");
const db = require("../database/models");
const Users = db.users
const getInternalError = (status, message) =>({
    status, message
})
const login = async (body) =>{
    const {email, password} = body
    console.log("login data ",body)
    console.log("email login", body.email)
    if (!body.email || !body.password ) throw getInternalError(httpCodes.BAD_REQUEST, errors.posts.require)
    try {
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().length(8).required()
        }).validate({email, password})
        console.log("----1----")
        if (schema.error) return {error: schema.error}
        console.log("----2-----")
        const exists = await Users.findOne({
            where: { email: body.email, password: body.password}
        })
        if (!exists) throw getInternalError(httpCodes.BAD_REQUEST, errors.login.invalidFields)
        // const { dataValues } = exists
        // const token = generateToken(dataValues)
        // return token
        console.log("data exists", exists.dataValues)
        return exists.dataValues
    }catch (e){
        console.log(e.message)
        return { error: {code: httpCodes.INTERNAL_SERVER_ERROR, message: errors.internal}}
    }

}
module.exports = {
    login
}
