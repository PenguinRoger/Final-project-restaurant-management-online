'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add new columns to the EQ table
    await queryInterface.addColumn('EQ', 'ADDRESS', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.addColumn('EQ', 'MAP_LAD', {
      type: Sequelize.DECIMAL(8, 6),
      allowNull: true,
    });

    await queryInterface.addColumn('EQ', 'MAP_LONG', {
      type: Sequelize.DECIMAL(9, 6),
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the added columns from the EQ table
    await queryInterface.removeColumn('EQ', 'ADDRESS');
    await queryInterface.removeColumn('EQ', 'MAP_LAD');
    await queryInterface.removeColumn('EQ', 'MAP_LONG');
  }
};
