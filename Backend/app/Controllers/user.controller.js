const UserService = require('../Service/User.service')
const httpCodes = require('../helpers/httpCodes.messages')
const generateToken = require("../utils/gennerateJWT");

const createUser = async (req, res) =>{
    try{
        const { body } = req;
        console.log("sdasda",req.body)
        console.log("---create-user--",body)
        const dataUser = JSON.stringify(body)
        // console.log("datauser",dataUser)
       const user = await UserService.create(dataUser);

        return res.status(httpCodes.CREATED).json(user)
    }catch (e) {
        console.log("controller e",e.message)
        return res.json({ message: e.message})
    }
}
const getAll = async (req, res) => {
    try{
        const all = await UserService.getAll();
        return res.status(httpCodes.OK).json(all)
    } catch (e){
        return res.status(httpCodes.INTERNAL_SERVER_ERROR).json({ message: e.message})
    }
}
const getByID = async (req, res) =>{
    try{
        const { id } = req.params;
        const user = await UserService.getbyID(id);
        return res.status(httpCodes.OK).json(user)
    }catch (e) {
        return res.status(httpCodes.NO_CONTENT).json({ message: e.message})
    }
}
const remove = async (req, res, next) =>{
    try {
        const { userID } = req;
        await UserService.remove(userID);
        return res.status(httpCodes.NO_CONTENT).end()
    }catch (e) {
        next(e)
    }
}
const search = async (req, res) =>{
    try {
        const {email} = req.body
        const user =  await UserService.search(email);
        return res.status(httpCodes.OK).json(user)
    }catch (e) {
        return res.status(httpCodes.NO_CONTENT).json({ message: e.message})
    }
}
module.exports = {
    createUser,
    getAll,
    getByID,
    remove,
    search
}
