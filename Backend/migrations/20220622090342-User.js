'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phoneNumber:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      roleID:{
        allowNull: false,
        type:Sequelize.UUID,
      },
      avatar:{
        allowNull: true,
        type: Sequelize.STRING
      },
      password:{
        type: Sequelize.STRING,
        allowNull: false
      },
      passwordHash:{
        type: Sequelize.STRING,
        allowNull: false
      },
      address:{
        type: Sequelize.STRING,
        allowNull: false
      },
      isActive:{
        type: Sequelize.ENUM('active','inactive'),
        defaultValue: 'inactive',
        allowNull: false
      },
      createAt: {
        type: Sequelize.DATE
      },
      updateAt: {
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users');
  }
};
