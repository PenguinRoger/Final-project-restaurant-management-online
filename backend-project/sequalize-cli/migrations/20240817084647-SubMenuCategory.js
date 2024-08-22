'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.createTable('SUB_MENU_CATEGORY', {
        SUB_MENU_CATEGORYNO: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        SUB_MENU_CATEGORYNAME: {
          type: Sequelize.STRING,
          allowNull: true
        },
        MENU_CATEGORYNO: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'MENU_CATEGORY',
            key: 'MENU_CATEGORYNO'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        SUB_MENU_CATEGORYPRICE: {
          type: Sequelize.DECIMAL(15, 2),
          allowNull: true,
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
        },
        CREATEUSER: {
          type: Sequelize.INTEGER(11)
        },
        UPDATEUSER: {
          type: Sequelize.INTEGER(11)
        },
        DELETEUSER: {
          type: Sequelize.INTEGER(11)
        },
      }, { transaction: t });
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SUB_MENU_CATEGORY');
  }
};
