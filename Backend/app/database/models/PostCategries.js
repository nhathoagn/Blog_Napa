const sequelize = require("../connection");
const Sequelize = require("sequelize");
module.exports = (sequelize, Sequelize) =>{
    const PostCategories = sequelize.define('postCategories',{
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
        postID:{
            type: Sequelize.UUID,
            allowNull: false
        },
        categories:{
            type: Sequelize.UUID,
            allowNull: false
        }
    })
    PostCategories.associate = (models) => {
        models.Post.belongsToMany(models.Categories,{
            foreignKey: 'postID',
            as: 'categories'
        })
        models.Categories.belongsToMany(models.Post,{
            foreignKey: "categoriesID",
            as: 'post'
        })
    }
    return PostCategories;
}
