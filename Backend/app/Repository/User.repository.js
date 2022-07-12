const Joi = require('joi')
const errors = require("../helpers/error.messages")
const httpCodes = require("../helpers/httpCodes.messages")
const JWT_SECRET = require("../../config/db.config")
const http = require("http");
const generateToken = require('../utils/gennerateJWT')
const bcrypt = require('bcryptjs');
const db = require("../database/models");
const Users = db.users
const getInternalError = () => ({
    error: { code: httpCodes.INTERNAL_SERVER_ERROR, message: errors.internal },
});
// còn passwordhash
const create = async ( body ) =>{
    const { firstName,lastName,email,gender,phoneNumber,address, password} = body
    console.log("aaaaaaaaaaaaa")
    console.log("data controller", body)
    console.log("data controller", body.email)

    const dataUser = JSON.parse(body)
    console.log("dataUser",dataUser)
    console.log("data controller", dataUser.email)
    console.log("firstName",firstName)
    try {
        console.log("---1---")
        try {
             Joi.object({
                firstName: Joi.string().required(),
                lastName: Joi.string().required(),
                email: Joi.string().email().required(),
                gender: Joi.string().required(),
                phoneNumber: Joi.number().integer().required(),
                address: Joi.string().required(),

                password: Joi.string().required()
            }).validate({firstName,lastName,email,gender,phoneNumber,address,password})
        }catch (e) {
            console.log(e.message)
        }

        console.log("----1.5------")
        console.log("----2----")
        console.log("email", {email: dataUser.email})
        const existingEmail = await Users.findOne({ where: {email: dataUser.email}})
        console.log("-----3-----")
         if (existingEmail){
             return { error: { code: httpCodes.CONFLICT,message: errors.users.alreadyRegistered}}
         }
        const salt = bcrypt.genSaltSync(10);
        //var hash = bcrypt.hashSync("B4c0/\/", salt);
        const passwordHash = await bcrypt.hash(dataUser.password,salt)
        console.log("---4------")
        const avatar = "https://hinhnen123.com/wp-content/uploads/2021/07/hinh-anh-avatar-trang-10.jpg#main"
        const roleID = 1
        const isActive = "active"
        //
        console.log("bbbbbbbbbbbbb")
        const addData = {...dataUser,passwordHash,avatar,roleID,isActive}
        console.log("addData",addData)
        const user = await Users.create(addData)
        console.log("ádasdasdaxzczx")
        return user
    }catch (e) {
        console.log("adsadasd")
        console.log(e.message)
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
