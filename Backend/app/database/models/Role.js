module.exports = (sequelize, Sequelize) =>{
    const Role = sequelize.define(
        "role",
        {
            id:{
                type:Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name:{
                type: Sequelize.STRING
            },
            createdAt: {
                type: Sequelize.DATE,
            },
            updatedAt: {
                type: Sequelize.DATE
            }
        }
    )
    Role.associate = (models) =>{
        Role.hasMany(models.User,{
            foreignKey: 'roleID'
        })
    }
    // /users-roles
    // connectDB.users.belongsTo(connectDB.roles);
    // connectDB.roles.hasMany(connectDB.users, { foreinKey: 'roleId' });

    return Role
}
