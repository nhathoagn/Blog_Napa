const LoginRepo = require("../Repository/Login.repository")
const LoginService = {}
LoginService.login = (body) => LoginRepo.login(body)
module.exports = LoginService
