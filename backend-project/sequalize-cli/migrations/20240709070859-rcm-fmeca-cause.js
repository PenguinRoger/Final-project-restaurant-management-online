'use strict';

const tableName='RCM_FMECA_CAUSE';
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
          FMECA_EFFECT_NO: {
            type: Sequelize.INTEGER,
            references: {
              model: 'RCM_FMECA_EFFECT',
              key: 'NO',
            }
          },
          FAILURECAUSNO: {
            type: Sequelize.INTEGER,
            references: {
              model: 'FAILURECAUSES',
              key: 'FAILURECAUSNO',
            }
          },
          SEVERITY_NO: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
              model: 'RCM_SEVERITY',
              key: 'NO',
            }
          },
          SEVERITY_VALUE: {
            type: Sequelize.DECIMAL(18, 2),
            allowNull: true
          },
          OCCURRENCE_NO: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
              model: 'RCM_OCCURRENCE',
              key: 'NO',
            }
          },
          OCCURRENCE_VALUE: {
            type: Sequelize.DECIMAL(18, 2),
            allowNull: true
          },
          DETECTION_NO: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
              model: 'RCM_DETECTION',
              key: 'NO',
            }
          },
          DETECTION_VALUE: {
            type: Sequelize.DECIMAL(18, 2),
            allowNull: true
          },
          RPN: {
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
