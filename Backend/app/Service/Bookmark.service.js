const BookmarkRepo = require("../Repository/Bookmark.repository")
const {posts} = require("../helpers/error.messages");
const BookmarkService = {};

BookmarkService.getAll = () => BookmarkRepo.getAll()
BookmarkService.getbyID = (id) => BookmarkRepo.getByID(id)
BookmarkService.create = (note) => BookmarkRepo.create(note)
BookmarkService.update = (note,id) => BookmarkRepo.update(note,id)
BookmarkService.remove = (postsID, userID) => BookmarkRepo.remove(postsID,userID)

module.exports = BookmarkService
