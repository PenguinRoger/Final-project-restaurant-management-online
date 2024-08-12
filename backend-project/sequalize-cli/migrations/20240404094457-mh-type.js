'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.createTable('MHTYPE', {
          MHTYPENO: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          MHTYPECODE: {
            type: Sequelize.STRING(10),
            collate: 'Thai_CI_AS',
            allowNull: true,
          },
          MHTYPENAME: {
            type: Sequelize.STRING(50),
            collate: 'Thai_CI_AS',
            allowNull: true,
          },
          FACTOR: {
            type: Sequelize.STRING(5),
            collate: 'Thai_CI_AS',
            defaultValue: '',
            allowNull: true,
          },
          FLAGDEL: {
            type: Sequelize.STRING(1),
            collate: 'Thai_CI_AS',
            defaultValue: 'F',
            allowNull: false,
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
            references: {
              model: 'Site',
              key: 'SiteNo',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
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
