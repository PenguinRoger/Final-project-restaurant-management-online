'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add new columns to the PU table
    await queryInterface.addColumn('PU', 'ADDRESS', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.addColumn('PU', 'MAP_LAD', {
      type: Sequelize.DECIMAL(8, 6),
      allowNull: true,
    });

    await queryInterface.addColumn('PU', 'MAP_LONG', {
      type: Sequelize.DECIMAL(9, 6),
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the added columns from the PU table
    await queryInterface.removeColumn('PU', 'ADDRESS');
    await queryInterface.removeColumn('PU', 'MAP_LAD');
    await queryInterface.removeColumn('PU', 'MAP_LONG');
  }
};
