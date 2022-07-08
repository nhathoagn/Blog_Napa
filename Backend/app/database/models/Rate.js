const sequelize = require("../connection");
const Sequelize = require("sequelize");
module.exports = (sequelize, Sequelize) =>{
    const Rate = sequelize.define("rate",{
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
        rate: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        createAt: {
            type: Sequelize.DATE,
        },
        updateAt: {
            type: Sequelize.DATE
        }

    })
    Rate.associate = (models) => {
        Rate.belongsTo(models.Post);
        Rate.belongsTo(models.User)
    }
//     //posts-rates
//     connectDB.rates.belongsTo(connectDB.posts);
//     connectDB.posts.hasMany(connectDB.rates, { foreinKey: 'postId' });
//
// //rates-users
//     connectDB.rates.belongsTo(connectDB.users);
//     connectDB.users.hasMany(connectDB.rates, { foreinKey: 'userId' });
    return Rate
}
