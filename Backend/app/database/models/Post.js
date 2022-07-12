module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("post", {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        content: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        coverImage: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        published: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
        rateID:{
          type: Sequelize.UUID,
          allowNull: true
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        userID: {
            type: Sequelize.UUID,
            allowNull: false
        },
        categoriesID:{
          type: Sequelize.UUID,
          allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE,
        },
        updatedAt: {
            type: Sequelize.DATE
        }
    });
    Post.associate = (models) =>{
        Post.belongsTo(models.User);
        Post.hasMany(models.Comment,{
            foreignKey: 'postID'
        });
        Post.hasMany(models.Rate,{
            foreignKey: 'postID'
        });
        Post.hasMany(models.Bookmark,{
            foreignKey: 'postID'
        })
    }
    return Post;

    // //users-posts
    // connectDB.posts.belongsTo(connectDB.users);
    // connectDB.users.hasMany(connectDB.posts, { foreinKey: 'userId' });
    // //comments-posts
    // connectDB.comments.belongsTo(connectDB.posts);
    // connectDB.posts.hasMany(connectDB.comments, { foreinKey: 'postId' });
    // //posts-rates
    // connectDB.rates.belongsTo(connectDB.posts);
    // connectDB.posts.hasMany(connectDB.rates, { foreinKey: 'postId' });
    // //posts-bookmarks
    // connectDB.bookmarks.belongsTo(connectDB.posts);
    // connectDB.posts.hasMany(connectDB.bookmarks, { foreinKey: 'postId' });
};
