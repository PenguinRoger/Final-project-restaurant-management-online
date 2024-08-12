'use strict';

const tableName='RCM_FMECA_COMPONENT';
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
          PARTNO: {
            type: Sequelize.INTEGER,
            comment: 'ข้อมูลอะไหล่',
            references: {
              model: 'IV_CATALOG',
              key: 'PARTNO',
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
