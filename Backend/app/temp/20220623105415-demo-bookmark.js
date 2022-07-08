'use strict';
const { faker } = require("@faker-js/faker")
let data = []
for (let i=0; i< 10; i++){
  data.push({
    id: faker.datatype.uuid(),
    userID: faker.datatype.uuid(),
    postID: faker.datatype.uuid(),
    note: faker.datatype.number({max: 5}),
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
    await queryInterface.bulkInsert("bookmark", data,{})

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('bookmark', null, {})
  },
  listRate(){
    return data
  }
};
