
module.exports = (sequelize, Sequelize) =>{
 const Bookmark = sequelize.define("bookmark",{
     id: {
         type: Sequelize.UUID,
         allowNull: false,
         defaultValue: Sequelize.UUIDV4,
         primaryKey: true
     },
     userID: {
         type: Sequelize.UUID,
         allowNull: true,
     },
     postID: {
         type: Sequelize.UUID,
         allowNull: false,
     },
     note: {
         type: Sequelize.STRING,
         allowNull: false,
     },
     createdAt: {
         type: Sequelize.DATE,
     },
     updatedAt: {
         type: Sequelize.DATE
     }
 })
    Bookmark.associate = (models) =>{
     Bookmark.belongsTo(models.User);
     Bookmark.belongsTo(models.Post)
    }
    return Bookmark
//     //users-bookmarks
//     connectDB.bookmarks.belongsTo(connectDB.users);
//     connectDB.users.hasMany(connectDB.bookmarks, { foreinKey: 'userId' });
//
// //posts-bookmarks
//     connectDB.bookmarks.belongsTo(connectDB.posts);
//     connectDB.posts.hasMany(connectDB.bookmarks, { foreinKey: 'postId' });
}
