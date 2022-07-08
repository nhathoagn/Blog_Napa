const LoginService = require('../Service/Login.service')
const httpCodes = require('../helpers/httpCodes.messages')

const login = async (req, res, next) =>{
    try{
        const {body} = req;
        const login = await  LoginService.login(body)
        return res.status(httpCodes.OK).json({ token: login})
    }catch (e) {
        next(e)
    }
}
module.exports = {
    login
}
