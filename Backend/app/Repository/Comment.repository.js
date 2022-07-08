const Joi = require('joi')
const { Sequelize, Op} = require('sequelize')
const {Post,User,Categories} = require('../database/models')
const {search} = require("./User.repository");
const httpCodes = require('../helpers/httpCodes.messages')
const messages = require('../helpers/error.messages')
const sequelize = require("../database/connection");
const {comment} = require("../helpers/error.messages");
const getInternalError = (status, message) =>({
    status, message
})
const create = async (comment) =>{
    const transaction = await sequelize.transaction();
    try {
        const schema = Joi.object({
            comment: Joi.string().length(200).required()
        }).validate({comment})
        if (schema.error) return {error: schema.error}
        const commentCreate = await Comment.create({comment})
        await  transaction.commit()
        return  commentCreate
    }catch (e) {
        await transaction.rollback()
        throw getInternalError(httpCodes.BAD_REQUEST, messages.comment.notFound)
    }
}
const getAll = async () =>{
    const all = await Comment.findAll({
        include: [{model: User , attributes: { exclude: ['password','passwordHash']}},{
            model: Post, through: {attributes: []}
        }]
    })
    return all
}
const getbyID = async (id) =>{
    const comment = await Comment.findByPk(id, { include: [{
            model: User, attributes: { exclude: ['password', 'passwordHash']}
        },{
            model: Post, through: { attributes: []}
        }]})
    if (!comment) throw  getInternalError(httpCodes.NOT_FOUND, messages.comment.notFound)
    return comment
}
const update = async (id,comment) =>{
    const schema = Joi.object({
        comment: Joi.string().length(200).required()
    }).validate({comment})
    if (schema.error) return { error: schema.error}
   const commentUpdate = await getbyID(id);
    if (!commentUpdate) throw getInternalError(httpCodes.NOT_FOUND, messages.comment.notFound)
    await  commentUpdate.set(comment)
    await  commentUpdate.save()
    return commentUpdate
}
const remote = async (id) =>{
    const commentDelete = await getbyID(id);
    if (!commentDelete) throw getInternalError(httpCodes.NOT_FOUND, messages.comment.notFound)
    await commentDelete.destroy({ where: id})
    return 'deleted'
}
module.exports = {
    create,
    getAll,
    getbyID,
    update,
    remote
}
