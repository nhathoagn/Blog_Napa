'use strict';
const { faker } = require("@faker-js/faker")

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("categories", [
      {
        id: faker.datatype.uuid(),
        name: 'Travel'
      },
      {
        id: faker.datatype.uuid(),
        name: 'Food'
      },
      {
        id: faker.datatype.uuid(),
        name: 'Fashion'
      },
      {
        id: faker.datatype.uuid(),
        name: 'Lifestyle'
      },
      {
        id: faker.datatype.uuid(),
        name: 'Other'
      }
    ],)

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('categories', null, {})
  },
};
