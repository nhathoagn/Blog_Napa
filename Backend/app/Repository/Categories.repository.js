const { Categories} = require('../database/models/')
const httpCodes = require('../helpers/httpCodes.messages')
const messages = require('../helpers/error.messages')
const getInternalError = (status, message) =>({
    status, message
})
const create = async (name) =>{
    if (!name) throw getInternalError(httpCodes.BAD_REQUEST, messages.category.emptyCategories)
    const categories = await Categories.create({name})
    return categories
}
const getAll = async () =>{
    const all = await  Categories.findAll();
    return all;
}
module.exports = {
    create,
    getAll
}
