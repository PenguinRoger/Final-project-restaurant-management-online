'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.createTable('MENU_CHOICE', {
        MENU_CHOICENO: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        MENU_CHOICENAME: {
          type: Sequelize.STRING,
          allowNull: true
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
      }, { transaction: t });
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MENU_CHOICE');
  }
};
