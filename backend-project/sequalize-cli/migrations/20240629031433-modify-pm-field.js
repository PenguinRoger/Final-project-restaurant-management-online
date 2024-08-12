'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('PM', 'NEXTDUE_END_D', {
      type: Sequelize.DATE,
      allowNull: true,
    });

    await queryInterface.addColumn('PM', 'PLANNER', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('PM', 'NEXTDUE_END_D');

    await queryInterface.removeColumn('PM', 'PLANNER');
  }
};
