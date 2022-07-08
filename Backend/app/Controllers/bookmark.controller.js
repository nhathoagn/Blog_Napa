const BookmarkService = require("../Service/Bookmark.service")
const httpCodes = require("../helpers/httpCodes.messages");
const createBookmark = async (req, res) => {
  try{
      const {note} = req.body;
      const bookmark = await BookmarkService.create(note)
      return res.status(httpCodes.CREATED).json(bookmark)
  }catch (e) {
      return res.status(httpCodes.BAD_REQUEST).json({ message: e.message})

  }
}
const getAll = async (req, res) =>{
    try {
        const all = await BookmarkService.getall();
        return res.status(httpCodes.OK).json(all)
    }catch (e) {
        return  res.status(httpCodes.BAD_REQUEST).json({ message: e.message})
    }
}
module.exports = {
    createBookmark,
    getAll
}

