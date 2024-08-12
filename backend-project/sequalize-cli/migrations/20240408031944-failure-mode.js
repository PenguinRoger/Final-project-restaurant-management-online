'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.createTable('FAILUREMODES', {
          FAILUREMODENO: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          FAILUREMODECODE: {
            type: Sequelize.STRING(10),
            collate: 'Thai_CI_AS',
            allowNull: true
          },
          FAILUREMODENAME: {
            type: Sequelize.STRING(150),
            collate: 'Thai_CI_AS',
            allowNull: true
          },
          FLAGDEL: {
            type: Sequelize.STRING(1),
            collate: 'Thai_CI_AS',
            defaultValue: 'F',
            allowNull: true
          },
          CREATEUSER: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: true
          },
          CREATEDATE: {
            type: Sequelize.STRING(8),
            collate: 'Thai_CI_AS',
            allowNull: true
          },
          UPDATEUSER: {
            type: Sequelize.INTEGER,
            allowNull: true
          },
          UPDATEDATE: {
            type: Sequelize.STRING(8),
            collate: 'Thai_CI_AS',
            allowNull: true
          },
          DELETEDATE: {
            type: Sequelize.DATE,
            collate: 'Thai_CI_AS',
            allowNull: true,
          },
          SITENO: {
            type: Sequelize.INTEGER,
            allowNull: true,
          }
        }, { transaction: t })
      ])
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('FAILUREMODES');
  }
};
