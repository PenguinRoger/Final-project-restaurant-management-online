'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.createTable('EQTYPE_TECH', {
          EQTYPETECHNO: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
          },
          EQTYPENO: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          TECHNO: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          TECHSEQ: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: true,
          },
          VALUETECH: {
            type: Sequelize.STRING(250),
            allowNull: true,
            collate: 'Thai_CI_AS',
          },
          FLAGDEL: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false,
          },
          CREATEUSER: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: true,
          },
          CREATEDATE: {
            type: Sequelize.DATE,
            allowNull: true,
          },
          UPDATEUSER: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: true,
          },
          UPDATEDATE: {
            type: Sequelize.DATE,
            allowNull: true,
          },
          DELETEUSER: {
            type: Sequelize.INTEGER,
            allowNull: true,
          },
          DELETEDATE: {
            type: Sequelize.DATE,
            allowNull: true,
          },
        }, { transaction: t })
      ])
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('EQTYPE_TECH');
  }
};
