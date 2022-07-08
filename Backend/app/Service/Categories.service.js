const CatergoriesRopo = require("../Repository/Categories.repository")
const CategoriesService = {}
CategoriesService.getAll = () => CatergoriesRopo.getAll()
CategoriesService.create = (name) => CatergoriesRopo.create(name)

module.exports = CategoriesService
