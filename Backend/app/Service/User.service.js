const UserRepo = require("../Repository/User.repository")
const UserService = {}
UserService.create = (firstName,lastName,email,gender,phoneNumber,address,avatar, password) => UserRepo.create(firstName,lastName,email,gender,phoneNumber,address,avatar, password)
UserService.getAll = () => UserRepo.getAll()
UserService.getbyID = (id) => UserRepo.getByID(id)
UserService.remove = (id) => UserRepo.remote(id)
UserService.search = (email) => UserRepo.search(email)

module.exports = UserService
