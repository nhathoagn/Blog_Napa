const UserRepo = require("../Repository/User.repository")
const UserService = {}
UserService.create = (body) => UserRepo.create(body)
UserService.getAll = () => UserRepo.getAll()
UserService.getbyID = (id) => UserRepo.getByID(id)
UserService.remove = (id) => UserRepo.remote(id)
UserService.search = (email) => UserRepo.search(email)

module.exports = UserService
