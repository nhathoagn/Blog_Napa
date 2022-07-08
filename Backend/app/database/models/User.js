module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,

        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        gender: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        phoneNumber:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        roleID:{
            allowNull: false,
            type:Sequelize.UUID,
        },
        avatar:{
            allowNull: true,
            type: Sequelize.STRING
        },
        password:{
            type: Sequelize.STRING,
            allowNull: false
        },
        address:{
            type: Sequelize.STRING,
            // allowNull: false
        },
        isActive:{
            type: Sequelize.ENUM('active','inactive'),
            defaultValue: 'inactive',
            // allowNull: false
        },
        createAt: {
            type: Sequelize.DATE
        },
        updateAt: {
            type: Sequelize.DATE
        }
    },{
        indexes: [
            {
                unique: true,
                fields: ['firstName','lastName','email','phoneNumber']
            }
        ]
    });
    Users.associate = (models) =>{
        Users.belongsTo(models.Role
        );
        Users.hasMany(models.Post,{
            foreignKey: 'userID'
        });
        Users.hasMany(models.Comment,{
            foreignKey: 'userID'
        })
    }
//     /users-roles
//     connectDB.users.belongsTo(connectDB.roles);
//     connectDB.roles.hasMany(connectDB.users, { foreinKey: 'roleId' });
//
// //users-posts
//     connectDB.posts.belongsTo(connectDB.users);
//     connectDB.users.hasMany(connectDB.posts, { foreinKey: 'userId' });
//
// //comments-users
//     connectDB.comments.belongsTo(connectDB.users);
//     connectDB.users.hasMany(connectDB.comments, { foreinKey: 'userId' });
    // Macros.associate = (models) => {
    //     Macros.belongsTo(models.Meals, {
    //         foreignKey: 'meal_id'
    //     });
    // };
    return Users;
};
