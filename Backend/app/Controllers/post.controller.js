const PostService = require('../Service/Post.service')
const httpCodes = require('../helpers/httpCodes.messages')

const createPost = async (req, res) => {
    try {
        const { body, userID } = req;
        const create = await PostService.create(body, userID);
        return res.status(httpCodes.CREATED).json(create)
    }catch (e) {
        return res.status(httpCodes.BAD_REQUEST).json({ message: e.message})
    }
}
const getAll = async (req, res) =>{
    try {
        const all = await  PostService.getAll();
        return res.status(httpCodes.CREATED).json(all)
    }catch (e) {
        return res.status(httpCodes.BAD_REQUEST).json({ message: e.message})
    }
}
const getbyID = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const post = await PostService.getbyID(id)
        return res.status(httpCodes.OK).json(post)
    }catch (e) {
        next(e)
    }
}
const update = async (req, res, next) =>{
    try {
        const { body, userID } = req;
        const { id } = req.params;
        const updated = await  PostService.update(body, id, userID);
        return res.status(httpCodes.OK).json(updated)
    }catch (e) {
        next(e)
    }
}
const remove = async (req, res, next) =>{
    try{
        const { params: { id }, userID} = req
        await PostService.remote(id, userID)
        return res.status(httpCodes.NO_CONTENT).end();
    }catch (e) {
        next(err);
    }
}
const search = async (req, res,next) =>{
    try{
        const {searchTerm} = req.query
      const search =  await PostService.search(searchTerm)
        return res.status(httpCodes.OK).json(search)
    }catch (e) {
            next(e)
    }
}
module.exports = {
    createPost,
    getAll,
    getbyID,
    update,
    remove,
    search
};
