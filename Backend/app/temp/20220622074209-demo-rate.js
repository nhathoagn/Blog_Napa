'use strict';
const { faker } = require("@faker-js/faker");
const bcrypt = require("bcryptjs");

let data = []
for (let i=0; i< 10; i++){
  data.push({
    id: faker.datatype.uuid(),
    userID: faker.datatype.uuid(),
    postID: faker.datatype.uuid(),
    rate: faker.datatype.number({max: 5}),
    createAt: new Date(),
    updateAt: new Date()
  })
}
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("rate", data,{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('rate', null, {})
  },
  listRate(){
    return data
  }
};
