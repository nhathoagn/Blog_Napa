'use strict';
const { faker} = require("@faker-js/faker")
const {number, string} = require("joi");
let data = []
for (let i=0; i< 10; i++){
  data.push({
    id: faker.datatype.uuid(),
    userID: faker.datatype.uuid(),
    postID: faker.datatype.uuid(),
    commentID: faker.datatype.uuid(),
    comment: faker.datatype.string({max: 20}),
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
    await queryInterface.bulkInsert("comments", data,{})

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('comments', null, {})
  },
  listRate(){
    return data
  }
};
