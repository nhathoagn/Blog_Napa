const express = require('express')
const router = require('./app/Routes/index')
const cors = require("cors");
const app = express()

const db = require("./app/database/models")
db.sequelize.sync();
db.sequelize.sync({force: false}).then( () =>{
    console.log("-------uwu------")
})

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
let corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions))

app.use(express.json());
app.use(router);

module.exports = app
