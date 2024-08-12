'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add new columns to the PM table
    await queryInterface.addColumn('PM', 'ADDRESS', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.addColumn('PM', 'MAP_LAD', {
      type: Sequelize.DECIMAL(8, 6),
      allowNull: true,
    });

    await queryInterface.addColumn('PM', 'MAP_LONG', {
      type: Sequelize.DECIMAL(9, 6),
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the added columns from the PM table
    await queryInterface.removeColumn('PM', 'ADDRESS');
    await queryInterface.removeColumn('PM', 'MAP_LAD');
    await queryInterface.removeColumn('PM', 'MAP_LONG');
  }
};
