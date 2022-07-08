const CommentRepo = require("../Repository/Comment.repository")
const {comment} = require("../helpers/error.messages");
const CommentService = {}
CommentService.getAll = () => CommentRepo.getAll()
CommentService.getbyID = (id) => CommentRepo.getbyID(id)
CommentService.create = (comment) => CommentRepo.create(comment)
CommentService.update = (id, comment) => CommentRepo.update(id,comment)
CommentService.remote = (id) => CommentRepo.remote(id)
module.exports = CommentService
