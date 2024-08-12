'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.createTable('MENU_CATEGORY', {
          MENU_CATEGORYNO: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
          MENU_CATEGORYNAME: {
            type: Sequelize.STRING,
            collate: 'Thai_CI_AS',
            allowNull: false
          },
          CREATEDATE: {
            type: Sequelize.DATE,
            allowNull: true,
            defaultValue: Sequelize.NOW
          },
          UPDATEDATE: {
            type: Sequelize.DATE,
            allowNull: true,
            defaultValue: Sequelize.NOW
          },
          DELETEDATE: {
            type: Sequelize.DATE
          }
        }, { transaction: t })
      ])
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MENU_CATEGORY');
  }
};
