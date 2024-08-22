'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.addColumn('MENU_CHOICE', 'SUB_MENU_CHOICENO', {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'SUB_MENU_CHOICE',
          key: 'SUB_MENU_CHOICENO'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }, { transaction: t });
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.removeColumn('MENU_CHOICE', 'SUB_MENU_CHOICENO', { transaction: t });
    });
  }
};
