const CategoriesService = require("../Service/Categories.service");
const httpCodes = require('../helpers/httpCodes.messages')

const create = async (req, res) => {
    try {
        const { name } = req.body;
        const  categories = await CategoriesService.create(name)
        return res.status(httpCodes.CREATED).json(categories)
    }catch (e) {
        return res.status(httpCodes.BAD_REQUEST).json({ message: e.message})
    }
}
const getAll = async (req, res) =>{
    try {
        const all = await CategoriesService.getall();
        return res.status(httpCodes.OK).json(all)
    }catch (e) {
        return  res.status(httpCodes.BAD_REQUEST).json({ message: e.message})
    }
}
module.exports = {
    create,
    getAll
}
