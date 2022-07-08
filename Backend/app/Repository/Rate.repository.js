const httpCodes = require("../helpers/httpCodes.messages");
const messages = require("../helpers/error.messages");
const {User, Post} = require("../database/models");
const {Rate} = require("../database/models")
const getInternalError = (status, message) =>({
    status, message
})
const create = async (rate) =>{
    if (!rate) throw getInternalError(httpCodes.BAD_REQUEST, messages.category.emptyCategories)
    const rateCreate = await Rate.create({name})
    return rateCreate
}
const update = async (id, rate) =>{
    const rateUpdate = await Rate.findOne({ where: {id: id}})
    if (!rateUpdate) throw "Rate not found!!!";
    await rateUpdate.set(rate)
    await  rateUpdate.save()
    return rateUpdate
}
const getAll = async () =>{
    const all = await Rate.findAll({
        include: [{
            model: User, attributes:{ exclude: ['password','passwordHash']}
        },{
            model: Post, through: { attributes: []}
        }]
    })
    return all
}
const getByID = async (id) =>{
    const rate = await Rate.findByPk(id, {
        include: [{
            model: User, attributes: { exclude: ['password','passwordHash'] }
        },{
            model: Post, through: { attributes: []}
        }]
    })
}
const romove = async (id) =>{
    const rate = await getByID(id);
    if (!rate) throw getInternalError(httpCodes.NOT_FOUND, messages.rate.notFound)
    await Rate.destroy({ where: id})
    return "deleted"
}
const getRatePost = async (postID) =>{
    const result = await Rate.findByPk(postID,{
        attributes: [[
            model.sequelize.fn(('AVG', model.sequelize.col('rate')),'angRating')
        ]]
    })
    return result
}
module.exports = {
    create,
    update,
    getAll,
    getByID,
    romove,
    getRatePost
}
