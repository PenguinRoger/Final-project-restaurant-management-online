'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.createTable('EQ_ATTACH', {
          EQ_ATTACHNO: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
          EQNO: {
            type: Sequelize.STRING,
            allowNull: false
          },
          DOCNAME: {
            type: Sequelize.STRING,
            allowNull: true
          },
          EXTENSION: {
            type: Sequelize.STRING,
            allowNull: true
          },
          URL: {
            type: Sequelize.STRING,
            allowNull: false
          },
          SIZE: {
            type: Sequelize.INTEGER,
            allowNull: true
          },
          CREATEDATE: {
            type: Sequelize.DATE,
            allowNull: true,
            defaultValue: Sequelize.NOW
          },
          UPDATEDATE: {
            type: Sequelize.DATE,
            allowNull: true,
            defaultValue: Sequelize.NOW
          },
          DELETEDATE: {
            type: Sequelize.DATE
          }
        }, { transaction: t })
      ])
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('EQ_ATTACH');
  }
};
