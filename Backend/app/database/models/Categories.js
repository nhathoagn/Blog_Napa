module.exports = (sequelize, Sequelize) =>{
    const Categories = sequelize.define('categories',{
        id:{
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
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
    })
    return Categories
}
