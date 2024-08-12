'use strict';

const tableName='RCM_FMECA_FAILURE_MODE';
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
          EQNO: {
            type: Sequelize.INTEGER,
            references: {
              model: 'EQ',
              key: 'EQNO',
            }
          },
          FMECA_COMPONENT_NO: {
            type: Sequelize.INTEGER,
            references: {
              model: 'RCM_FMECA_COMPONENT',
              key: 'NO',
            }
          },
          FAILUREMODENO: {
            type: Sequelize.INTEGER,
            references: {
              model: 'FAILUREMODES',
              key: 'FAILUREMODENO',
            }
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
