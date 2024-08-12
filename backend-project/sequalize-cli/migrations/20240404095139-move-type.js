'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.createTable('MOVETYPE', {
          MOVETYPENO: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          MOVETYPECODE: {
            type: Sequelize.STRING(10),
            collate: 'Thai_CI_AS',
            allowNull: true,
          },
          MOVETYPENAME: {
            type: Sequelize.STRING(50),
            collate: 'Thai_CI_AS',
            allowNull: true,
          },
          MOVETYPEPARENT: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: true,
          },
          ACC_DR: {
            type: Sequelize.STRING(30),
            collate: 'Thai_CI_AS',
            allowNull: true,
          },
          ACC_CR: {
            type: Sequelize.STRING(30),
            collate: 'Thai_CI_AS',
            allowNull: true,
          },
          FLAGDEL: {
            type: Sequelize.STRING(1),
            collate: 'Thai_CI_AS',
            defaultValue: 'F',
            allowNull: false,
          },
          HIERARCHYNO: {
            type: Sequelize.STRING(100),
            collate: 'Thai_CI_AS',
            allowNull: true,
          },
          CHILDMAX: {
            type: Sequelize.STRING(7),
            collate: 'Thai_CI_AS',
            allowNull: true,
          },
          CURR_LEVEL: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: true,
          },
          CREATEUSER: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: true,
          },
          CREATEDATE: {
            type: Sequelize.DATE,
            collate: 'Thai_CI_AS',
            allowNull: true,
          },
          UPDATEUSER: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: true,
          },
          UPDATEDATE: {
            type: Sequelize.DATE,
            collate: 'Thai_CI_AS',
            allowNull: true,
          },
          DELETEDATE: {
            type: Sequelize.DATE,
            collate: 'Thai_CI_AS',
            allowNull: true,
          },
          SiteNo: {
            type: Sequelize.INTEGER,
            allowNull: true,
          },
          ACC_DR_ISS: {
            type: Sequelize.INTEGER,
            allowNull: true,
          },
          ACC_CR_ISS: {
            type: Sequelize.INTEGER,
            allowNull: true,
          },
          ACC_DR_RCV: {
            type: Sequelize.INTEGER,
            allowNull: true,
          },
          ACC_CR_RCV: {
            type: Sequelize.INTEGER,
            allowNull: true,
          },
        }, { transaction: t })
      ])
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('MoveTypes', 'FK_MoveType_Site');
    await queryInterface.dropTable('MoveTypes');
  }
};
