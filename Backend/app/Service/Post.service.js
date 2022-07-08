const PostRepo = require("../Repository/Post.repository")
const PostService = {}

PostService.create = (post) => PostRepo.create(post)
PostService.getAll = (condition) => PostRepo.getAll(condition)
PostService.getbyID = (id) => PostRepo.getbyID(id)
PostService.update = (id,data) => PostRepo.update(id,data)
PostService.remote = (id) => PostRepo.remove(id)
// PostService.findAllPublished = () => PostRepo.findAllPublished()
PostService.search = (searchTerm) => PostRepo.search(searchTerm)
module.exports = PostService
