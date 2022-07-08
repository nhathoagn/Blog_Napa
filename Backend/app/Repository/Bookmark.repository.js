const {Bookmark} = require('../database/models')
const httpCodes = require("../helpers/httpCodes.messages");
const messages = require("../helpers/error.messages");
const {Post,User,Categories} = require('../database/models')
const sequelize = require("../database/connection");
const {search} = require("./User.repository");
const Joi = require("joi");

const getInternalError = (status, message) =>({
    status, message
})
const create = async (note) =>{
    const transaction = await sequelize.transaction();
    try{
        const post = await Post.create({note}, {transaction});
        await  transaction.commit();
        return post;
    }catch (e) {
        await transaction.rollback()
        throw getInternalError(httpCodes.BAD_REQUEST, messages.posts.categoryIdsNotFound)
    }
}
const getAll = async () =>{
    const all = await  Bookmark.findAll({
        include: [{ model: User, attributes:{ exclude: ['password','passwordHash']}}
            ,{model: Post, through: {attributes: []}}]
    })
    return all
}
const getByID = async (id) =>{
    const bookmark = await Bookmark.findByPk(id, { include: [{
        model: User, attributes:{exclude: ['password','passwordhash']},
            models: Post, through: { attributes: []}

        }]})
    if (!bookmark) throw  getInternalError(httpCodes.NOT_FOUND, messages.posts.notFound)
  return bookmark
}
const update = async  (note, id) =>{
    const bookmarkUpdate = await  Post.findByPk(id, { include: [{
        model: User, attributes: { exclude: ['password','passwordHash']}
        },{
        model: Post, through: { attributes: []}
        }]
    })
    if (bookmarkUpdate.userID !== userID) throw  getInternalError(httpCodes.UNAUTHORIZED, messages.users.unauthorized)
    await  bookmarkUpdate.set(note)
    await  bookmarkUpdate.save()
    return bookmarkUpdate
}
const remove = async (postID, userID) =>{
    const post = await Post.getbyID(postID);
    if (!post) throw getInternalError(httpCodes.NOT_FOUND, messages.posts.notFound)
    const {id} = post.user;
    if (userID !== id) throw getInternalError(httpCodes.UNAUTHORIZED, messages.users.unauthorized)
    await  post.destroy({ where: { postID }});
    return 'deleted'
}
module.exports = {
    create,
    getAll,
    getByID,
    update,
    remove
}
