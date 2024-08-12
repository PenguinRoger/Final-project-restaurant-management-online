'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.createTable('WOSTATUS', {
          WOSTATUSNO: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
          WOSTATUSCODE: {
            type: Sequelize.STRING(10),
            allowNull: true,
            collate: 'Thai_CI_AS'
          },
          WOSTATUSNAME: {
            type: Sequelize.STRING(50),
            allowNull: true,
            collate: 'Thai_CI_AS'
          },
          FLAGDEL: {
            type: Sequelize.BOOLEAN,
            allowNull: false
          },
          CREATEUSER: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0
          },
          CREATEDATE: {
            type: Sequelize.DATE,
            allowNull: true
          },
          UPDATEUSER: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0
          },
          UPDATEDATE: {
            type: Sequelize.DATE,
            allowNull: true
          },
          SITENO: {
            type: Sequelize.INTEGER,
            allowNull: true
          },
          DELETEUSER: {
            type: Sequelize.INTEGER,
            allowNull: true
          },
          DELETEDATE: {
            type: Sequelize.DATE,
            allowNull: true
          }
        }, { transaction: t })
      ])
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('WOSTATUS');
  }
};
