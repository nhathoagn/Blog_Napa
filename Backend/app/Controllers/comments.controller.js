const CommentService = require('../Service/Comment.service')
const httpCodes = require('../helpers/httpCodes.messages')

const createComment = async (req, res) =>{
    try {
        const { content } = req.body
        const comment = await CommentService.create(content)
        return res.status(httpCodes.CREATED).json(comment)
    }catch (e) {
        return res.status(httpCodes.BAD_REQUEST).json({ message: e.message})
    }
}
const getAll = async (req, res) => {
    try {
        const all = await CommentService.getAll();
        return res.status(httpCodes.OK).json(all)
    }catch (e) {
        return res.status(httpCodes.BAD_REQUEST).json({ message: e.message})
    }
}
const getByID = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const comment = await CommentService.getbyID(id)
        return res.status(httpCodes.OK).json(comment)
    }catch (e) {
        next(e)
    }
}
const update = async (req, res, next) =>{
    try {
        const { content } = req
        const { id } = req.params
        const comment = await CommentService.update(id, content)
        return res.status(httpCodes.OK).json(comment)
    }catch (e){
        next(err)
    }
}
module.exports = {
    createComment,
    getAll,
    getByID,
    update,
    remove
}
