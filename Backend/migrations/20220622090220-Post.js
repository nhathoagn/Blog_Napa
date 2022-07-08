'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('post', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      coverImage: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      published: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      rateID:{
        type: Sequelize.UUID,
        allowNull: true
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userID: {
        type: Sequelize.UUID,
        allowNull: false
      },
      categoriesID:{
        type: Sequelize.UUID,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
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
    await queryInterface.dropTable('post');
  }
};
