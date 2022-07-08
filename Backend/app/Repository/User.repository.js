const Joi = require('joi')
const {Users} = require("../database/models/User")
const errors = require("../helpers/error.messages")
const httpCodes = require("../helpers/httpCodes.messages")
const JWT_SECRET = require("../../config/db.config")
const http = require("http");
const generateToken = require('../utils/gennerateJWT')
const getInternalError = () => ({
    error: { code: httpCodes.INTERNAL_SERVER_ERROR, message: errors.internal },
});
// còn passwordhash
const create = async ( body ) =>{
    const { firstName,lastName,email,gender,phoneNumber,address,avatar, password} = body
    try {
        const schema = Joi.object({
            firstName: Joi.string().length(8).required(),
            lastName: Joi.string().length(8).required(),
            email: Joi.string().email().required(),
            gender: Joi.string().length(6).required(),
            phoneNumber: Joi.number().integer().required(),
            address: Joi.string().required(),
            password: Joi.string().required()
        }).validate({firstName,lastName,email,gender,phoneNumber,address,password})
        if (schema.error) return {error: schema.error}
        const existingEmail = await Users.findOne({ where: {email: body.email}})
        if (existingEmail){
            return { error: { code: httpCodes.CONFLICT,message: errors.users.alreadyRegistered}}
        }
        const passwordHash = await bcrypt.hash(password,10)
        const avatar = "https://hinhnen123.com/wp-content/uploads/2021/07/hinh-anh-avatar-trang-10.jpg#main"
        const roleID = 1
        const isActive = "active"
       const user = await Users.create({firstName,lastName,email,gender,phoneNumber,roleID,avatar,password,passwordHash,address,isActive})
        return user
    }catch (e) {
        console.log(error.message)
        return getInternalError()
    }
}
const getAll = async () => {
    try {
        const users = await Users.findAll({ attributes: { exclude: ['password','passwordHassh'] }})
        if (!users) return { error: { code: httpCodes.NOT_FOUND,message: errors.users.noUserFound}}
        return users;
    }catch (e) {
        console.log(error.message)
        return getInternalError()
    }
}
const getByID = async  (id) =>{
    try {
        const user = await Users.findByPk(id, {attributes: { exclude: ['password']}})
        if (!user) return { error: { code: httpCodes.NOT_FOUND, message: errors.users.doesNotExist}}
        return user;
    }catch (e) {
        console.log(error.message)
        return getInternalError()
    }
};
const remote = async  (id) =>{
    try {
        await Users.destroy({ where: {id}});
    }catch (e) {
        console.log(error.message)
        return getInternalError()
    }
}
const  search = async (email) =>{

      const { dataValues} = await Users.findOne({ where: {email}})

  return dataValues.id;
}
module.exports = {
    create,
    getAll,
    getByID,
    remote,
    search
}
