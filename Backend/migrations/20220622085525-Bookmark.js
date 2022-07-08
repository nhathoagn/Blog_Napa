'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     *
     */
    await queryInterface.createTable('bookmark', {
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
      note: {
        type: Sequelize.STRING,
        allowNull: false,
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
     *
     */
    await queryInterface.dropTable('bookmark');
  }
};
