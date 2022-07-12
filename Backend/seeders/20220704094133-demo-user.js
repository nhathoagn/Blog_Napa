'use strict';
const {faker} = require("@faker-js/faker");
let data = [];
for (let i = 0; i< 10 ; i++){
  data.push({
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    gender: faker.name.gender(),
    phoneNumber: faker.phone.number('501-###'),
    avatar: faker.internet.avatar(),
    password: faker.internet.password(),
    address: faker.address.streetAddress(),
    roleID: faker.datatype.uuid(),
    isActive: "inactive",
    createdAt: new Date(),
    updatedAt: new Date()
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
    await queryInterface.bulkInsert("users", data,{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null,{})
  },
  listUser(){
    return data
  }
};
