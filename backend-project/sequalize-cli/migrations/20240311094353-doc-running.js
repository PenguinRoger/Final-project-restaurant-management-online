'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.createTable('DOC_RUNNING', {
          MODULE: {
            type: Sequelize.STRING(50),
            allowNull: false,
            primaryKey: true,
            collate: 'Thai_CI_AS'
          },
          PREFIX: {
            type: Sequelize.STRING(10),
            allowNull: false,
            primaryKey: true,
            collate: 'Thai_CI_AS'
          },
          RUNNING_NUMBER: {
            type: Sequelize.INTEGER,
            allowNull: true
          }
        }, { transaction:t })
      ])
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.dropTable("DOC_RUNNING",{ transaction: t }),
      ])
    });
  }
};
