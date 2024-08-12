'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('ATTACH_DOC', 'SIZE', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('ATTACH_DOC', 'SIZE');
  }
};
