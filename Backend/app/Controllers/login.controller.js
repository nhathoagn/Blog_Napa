const LoginService = require('../Service/Login.service')
const httpCodes = require('../helpers/httpCodes.messages')
const generateToken = require("../utils/gennerateJWT");

const login = async (req, res, next) =>{
    try{
        const {body} = req;
        const login = await  LoginService.login(body)
        console.log("res login controller", login)
        const {firstName, phoneNumber, email} = login
        console.log("res firstName",firstName)
        const  token = generateToken({firstName, phoneNumber, email})
        console.log("sadadssdas")
        const result = {login: login, token:token}
        console.log("ressult", result)
        return res.status(httpCodes.OK).json(result)
    }catch (e) {
        next(e)
    }
}
module.exports = {
    login
}
