module.exports = (sequelize, Sequelize) =>{
    const Categories = sequelize.define('categories',{
        id:{
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        name:{
           type: Sequelize.STRING
        }
    })
    return Categories
}
