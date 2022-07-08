'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('comments', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      userID: {
        type: Sequelize.UUID,
        allowNull: true,
      },
      postID: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      commentID: {
        type: Sequelize.UUID,
        allowNull: true,
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createAt: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('comments');
  }
};
