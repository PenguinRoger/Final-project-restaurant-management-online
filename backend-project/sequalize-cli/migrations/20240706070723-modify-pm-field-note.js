'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.addColumn('PM', 'NOTE', {
      type: Sequelize.STRING(4000),
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('PM', 'NOTE');
  }
};
