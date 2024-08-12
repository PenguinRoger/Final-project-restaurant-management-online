'use strict';

const tableName='RCM_FMECA_EFFECT';
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
          FMECA_FM_NO: {
            type: Sequelize.INTEGER,
            references: {
              model: 'RCM_FMECA_FAILURE_MODE',
              key: 'NO',
            }
          },
          FAILUREEFFECTNO: {
            type: Sequelize.INTEGER,
            references: {
              model: 'FAILUREEFFECT',
              key: 'FAILUREEFFECTNO',
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
