// const express = require("express");
// const cors = require("cors");
// const app = express();
// const db = require("./app/database/models")
// db.sequelize.sync();
// db.sequelize.sync({force: false}).then( () =>{
//     console.log("-------uwu------")
// })
//
// // parse requests of content-type - application/json
// app.use(express.json());
// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));
// // simple route
//
// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to bezkoder application." });
// });
//
// // set port, listen for requests
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}.`);
// });
//
