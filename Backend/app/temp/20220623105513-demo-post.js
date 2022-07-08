'use strict';
const { faker } = require("@faker-js/faker")
const rate = require("./20220622074209-demo-rate")
const user = require("./20220623105523-demo-users")
const categories = require("./20220623105432-demo-categories")
let data = []
for (let i=0; i< 10; i++){
  data.push({
    id: faker.datatype.uuid(),
    title: faker.datatype.string({max: 100}),
    content: faker.datatype.string({max: 100}),
    coverImage: faker.image.avatar(),
    published: faker.datatype.boolean(),
    rateID:rate[Math.floor(Math.random() * rate.length)].id,
    description: faker.datatype.string({ max: 100}),
    userID: user[Math.floor(Math.random() * user.length)].id,
    categoriesID: categories[Math.floor( Math.random()) * categories.length].id,
    // userId: users[Math.floor(Math.random() * users.length)].id,
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
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
