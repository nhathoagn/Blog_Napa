const Joi = require('joi')
const { Sequelize, Op} = require('sequelize')
const config = require('../../config/db.config')
const {Post,User,Categories} = require('../database/models')
const {search} = require("./User.repository");
const sequelize = require("../database/connection");
const httpCodes = require('../helpers/httpCodes.messages')
const messages = require('../helpers/error.messages')
const {bool} = require("joi");
const getInternalError = (status, message) =>({
     status, message
})

const create = async (body, userID) => {
    const transaction = await sequelize.transaction();

    try{
        const {title, content, coverImage, description,categoriesID } = body;
        const schema = Joi.object({
            title: Joi.string().length(100).required(),
            content: Joi.string().length(100).require(),
            coverImage: Joi.string().required(),
            description: Joi.string().length(100).required(),
        }).validate({title,content,coverImage,description})
        if (schema.error) return {error: schema.error}
        const post = await Post.create({ title, content, coverImage, description,userID}, {transaction});
        await post.addCategories(categoriesID, {transaction})
        await  transaction.commit();
        return post;
    }catch (e) {
        await transaction.rollback()
        throw getInternalError(httpCodes.BAD_REQUEST, messages.posts.categoryIdsNotFound)
    }
}
const getAll = async () =>{
    const all = await Post.findAll(
        { include: [{model: User, attributes: { exclude: ['password','passwordHash']}},{
            model: Categories, through: {attributes: []}
            }]}
    )
    return all
}

const getbyID = async (id) =>{
    const post = await Post.findByPk(id, { include: [{
        model: User, attributes: { exclude: ['password', 'passwordHash']}
        },{
        model: Categories, through: { attributes: []}
        }]})
    if (!post) throw  getInternalError(httpCodes.NOT_FOUND, messages.posts.notFound)
    return post
}
const update = async (body, id, userID) =>{
    const {title, content, description,published,coverImage} = body;
    const schema = Joi.object({
        title: Joi.string().length(100).required(),
        content: Joi.string().length(100).require(),
        coverImage: Joi.string().required(),
        description: Joi.string().length(100).required(),
        published: Joi.boolean().required()
    }).validate({title,content,coverImage,published,description})
    if (schema.error) return {error: schema.error}
    const post = await Post.findByPk(id, { include: [{
        model: User, attributes: { exclude: ['password','passwordHash']}
        },{
        model: Categories, through: {attributes: []}
        }]})
    if (post.userID !== userID ) throw getInternalError(httpCodes.UNAUTHORIZED, messages.users.unauthorized)
    await  post.set({ title, content, description,published,coverImage})
    await  post.save()
    return post
}
const remove = async (postID, userID) =>{
    const post = await getbyID(postID);
    if (!post) throw getInternalError(httpCodes.NOT_FOUND, messages.posts.notFound)
    const {id} = post.user;
    if (userID !== id) throw getInternalError(httpCodes.UNAUTHORIZED, messages.users.unauthorized)
    await  post.destroy({ });
    return 'deleted'
}
const searchPost = async (searchTerm) =>{
    const search = await Post.findAll({
        where:{
            [Op.or]: [
                {
                    title: {
                        [Op.substring]: `%${searchTerm}%`
                    }
                },{
                  content: {
                      [Op.substring]: `%${searchTerm}%`
                  },
                },
            ],
        },
        include: {
            model: User, attributes: { exclude: ['password'] },
        }
    });
    return search
}
module.exports = {
    create,
    getAll,
    getbyID,
    update,
    remove,
    search
}
