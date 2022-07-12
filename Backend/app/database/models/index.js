const dbConfig = require("../../../config/db.config")
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("./User")(sequelize, Sequelize);
db.post = require("./Post")(sequelize,Sequelize);
db.role = require("./Role")(sequelize,Sequelize);
db.bookmark = require("./Bookmark")(sequelize, Sequelize);
db.comment = require("./Post")(sequelize,Sequelize);
db.rate = require("./Rate")(sequelize,Sequelize);


// db.role.belongsToMany(db.user, {
//     through: "user_roles",
//     foreignKey: "role_id",
//     otherKey: "user_id"
// });
// db.user.belongsToMany(db.role, {
//     through: "user_roles",
//     foreignKey: "user_id",
//     otherKey: "role_id"
// });

module.exports = db;
