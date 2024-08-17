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
          },
          CREATEUSER: {
            type: Sequelize.INTEGER(11)
          },
          UPDATEUSER: {
            type: Sequelize.INTEGER(11)
          },
          DELETEUSER: {
            type: Sequelize.INTEGER(11)
          },
        }, { transaction: t })
      ])
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MENU_CATEGORY');
  }
};
