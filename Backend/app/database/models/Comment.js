const sequelize = require("../connection");
const Sequelize = require("sequelize");
module.exports = (sequelize, Sequelize) =>{
    const Comments = sequelize.define("comments",{
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
        commentID: {
            type: Sequelize.UUID,
            allowNull: true,
        },
        comment: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createAt: {
            type: Sequelize.DATE,
        },
        updateAt: {
            type: Sequelize.DATE
        }
    })
      Comments.associate = (models) =>{
          Comments.belongsTo(models.User);
          Comments.belongsTo(models.Post)
          Comments.belongsTo(models.Comment,{
              foreignKey: 'commentID',
              as: 'parent'
          });
          Comments.hasMany(models.Comment,{
              foreignKey: 'commentID',
              as: 'children'
          })
      }
    return Comments

//     //comments-users
//     connectDB.comments.belongsTo(connectDB.users);
//     connectDB.users.hasMany(connectDB.comments, { foreinKey: 'userId' });
//
// //comments-posts
//     connectDB.comments.belongsTo(connectDB.posts);
//     connectDB.posts.hasMany(connectDB.comments, { foreinKey: 'postId' });
//
// //comments-comments
//     connectDB.comments.belongsTo(connectDB.comments, { as: 'parent', foreignKey: 'parentId' });
//     connectDB.comments.hasMany(connectDB.comments, { as: 'children', foreignKey: 'parentId' });

}
