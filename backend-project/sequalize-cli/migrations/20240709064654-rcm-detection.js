'use strict';

const tableName='RCM_DETECTION';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.createTable(tableName, {
          NO: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          SEQ: {
            type: Sequelize.INTEGER,
            allowNull: true
          },
          NAME: {
            type: Sequelize.STRING(100),
            allowNull: true
          },
          VALUE: {
            type: Sequelize.DECIMAL(18, 2),
            allowNull: true
          },
          CREATEUSER: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: true
          },
          CREATEDATE: {
            type: Sequelize.STRING(8),
            allowNull: true
          },
          UPDATEUSER: {
            type: Sequelize.INTEGER,
            allowNull: true
          },
          UPDATEDATE: {
            type: Sequelize.STRING(8),
            allowNull: true
          },
          DELETEDATE: {
            type: Sequelize.DATE,
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
    await queryInterface.dropTable(tableName);
  }
};
