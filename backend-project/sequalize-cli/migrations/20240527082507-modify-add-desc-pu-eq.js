'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('PU', 'DESCRIPTION', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('EQ', 'DESCRIPTION', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('IV_CATALOG', 'DESCRIPTION', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('PU', 'DESCRIPTION');
    await queryInterface.removeColumn('EQ', 'DESCRIPTION');
    await queryInterface.removeColumn('IV_CATALOG', 'DESCRIPTION');
  }
};
