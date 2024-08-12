'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.createTable('WO_HISTORY', {
          ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          WONO: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          TIMESTAMP: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW,
          },
          TYPE: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          ACTION_BY: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          DETAIL: {
            type: Sequelize.TEXT,
            allowNull: true, // Adjust allowNull as needed
          },
        }, { transaction: t })
      ])
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
