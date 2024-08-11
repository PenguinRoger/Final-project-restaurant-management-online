'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Menu', {
      MENUID: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MENUNAME: {
        type: Sequelize.STRING,
        collate: 'Thai_CI_AS',
        allowNull: true
      },
      MENUPRICE: {
        type: Sequelize.INTEGER,
        collate: 'Thai_CI_AS',
        allowNull: true
      },
      CREATEUSER: {
        allowNull: true,
        collate: 'Thai_CI_AS',
        type: Sequelize.INTEGER
      },
      UPDATEUSER: {
        allowNull: true,
        collate: 'Thai_CI_AS',
        type: Sequelize.INTEGER
      },
      DELETEUSER: {
        allowNull: true,
        collate: 'Thai_CI_AS',
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Menu');
  }
};
