'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.createTable('WO_RESOURCE', {
          TRDATE: {
            type: Sequelize.STRING(8),
            allowNull: true,
            collate: 'Thai_CI_AS'
          },
          WORESCNO: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
          },
          WONO: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          TSNO: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: true
          },
          CRAFTNO: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: true
          },
          TOOLNO: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: true
          },
          STORENO: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: true
          },
          STORELOCNO: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: true
          },
          PARTNO: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: true
          },
          OTHERCODE: {
            type: Sequelize.STRING(20),
            allowNull: true,
            collate: 'Thai_CI_AS'
          },
          OPNO: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: true
          },
          RESCTYPE: {
            type: Sequelize.STRING(1),
            allowNull: true,
            collate: 'Thai_CI_AS'
          },
          RESCSUBTYPE: {
            type: Sequelize.STRING(1),
            allowNull: true,
            collate: 'Thai_CI_AS'
          },
          NAME: {
            type: Sequelize.STRING(50),
            allowNull: true,
            collate: 'Thai_CI_AS'
          },
          UNIT: {
            type: Sequelize.STRING(50),
            allowNull: true,
            collate: 'Thai_CI_AS'
          },
          UNITCOST: {
            type: Sequelize.FLOAT,
            defaultValue: 0,
            allowNull: true
          },
          QTY: {
            type: Sequelize.FLOAT,
            defaultValue: 0,
            allowNull: true
          },
          HOURS: {
            type: Sequelize.FLOAT,
            defaultValue: 0,
            allowNull: true
          },
          QTYHOURS: {
            type: Sequelize.FLOAT,
            defaultValue: 0,
            allowNull: true
          },
          AMOUNT: {
            type: Sequelize.FLOAT,
            defaultValue: 0,
            allowNull: true
          },
          EXPNO: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          REMARK: {
            type: Sequelize.STRING(50),
            allowNull: true,
            collate: 'Thai_CI_AS'
          },
          FLAGACT: {
            type: Sequelize.STRING(1),
            allowNull: false,
            defaultValue: 'F',
            collate: 'Thai_CI_AS'
          },
          CREATEUSER: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: true
          },
          CREATEDATE: {
            type: Sequelize.STRING(8),
            allowNull: true,
            collate: 'Thai_CI_AS'
          },
          UPDATEUSER: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: true
          },
          UPDATEDATE: {
            type: Sequelize.STRING(8),
            allowNull: true,
            collate: 'Thai_CI_AS'
          },
          TRDNO: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: true
          },
          PARTTYPECODE: {
            type: Sequelize.STRING(2),
            allowNull: true,
            collate: 'Thai_CI_AS'
          },
          MHTYPENO: {
            type: Sequelize.INTEGER,
            defaultValue: 1,
            allowNull: true
          },
          FACTOR: {
            type: Sequelize.FLOAT,
            defaultValue: 1,
            allowNull: true
          },
          TRTIME: {
            type: Sequelize.STRING(8),
            allowNull: true,
            collate: 'Thai_CI_AS'
          },
          UNITRATE: {
            type: Sequelize.FLOAT,
            defaultValue: 1,
            allowNull: true
          },
          VENDORNO: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: true
          },
          RESERVED_FLAG: {
            type: Sequelize.STRING(1),
            allowNull: true,
            defaultValue: 'F',
            collate: 'Thai_CI_AS'
          },
          PMNO: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: true
          },
          NOTDONEFLAG: {
            type: Sequelize.STRING(1),
            allowNull: true,
            defaultValue: 'F',
            collate: 'Thai_CI_AS'
          },
          SERVICELEVELFLAG: {
            type: Sequelize.STRING(1),
            allowNull: true,
            defaultValue: 'F',
            collate: 'Thai_CI_AS'
          },
          TRTIMEFN: {
            type: Sequelize.STRING(8),
            allowNull: true,
            collate: 'Thai_CI_AS'
          },
          SYMPTOMNO: {
            type: Sequelize.INTEGER,
            allowNull: true
          },
          PERSONNO: {
            type: Sequelize.INTEGER,
            allowNull: true
          },
          DIRECTPURCHASE: {
            type: Sequelize.STRING(1),
            allowNull: true,
            defaultValue: 'F',
            collate: 'Thai_CI_AS'
          },
          FLAGNOTPARTCODE: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: true
          },
          COSTIMPORT: {
            type: Sequelize.FLOAT,
            defaultValue: 0,
            allowNull: true
          },
          AMOUNTIMPORT: {
            type: Sequelize.FLOAT,
            defaultValue: 0,
            allowNull: true
          }
        }, { transaction: t })
      ])
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('WO_RESOURCE');
  }
};
