'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add new columns to the WO table
    await queryInterface.addColumn('WO', 'NOTE', {
      type: Sequelize.STRING(4000),
      allowNull: true,
    });

  },

  down: async (queryInterface, Sequelize) => {
    // Remove the added columns from the WO table
    await queryInterface.removeColumn('WO', 'NOTE');
  }
};
