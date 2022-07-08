module.exports = {
    host: "localhost",
    user: "root",
    password: "my-secret-pw",
    database: "blog_to",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    auth: {
        secret: "thuctinhdi"
    }
}
