'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.createTable('FAILUREEFFECT', {
          FAILUREEFFECTNO: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
          },
          FAILUREEFFECTCODE: {
            type: Sequelize.STRING(10),
            collate: 'Thai_CI_AS',
            allowNull: true,
          },
          FAILUREEFFECTNAME: {
            type: Sequelize.STRING(150),
            collate: 'Thai_CI_AS',
            allowNull: true,
          },
          FlagDel: {
            type: Sequelize.STRING(1),
            collate: 'Thai_CI_AS',
            defaultValue: 'F',
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
        }, { transaction: t })
      ])
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('FAILUREEFFECT');
  }
};
