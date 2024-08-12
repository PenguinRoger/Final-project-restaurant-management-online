'use strict';

const tableName='PU';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try{

      queryInterface.addConstraint(tableName, {
        fields: ['PUTYPENO'],
        type: 'foreign key',
        name: `fk_${tableName}_PUTYPENO_PUTYPE_PUTYPENO`,
        references: { //Required field
          table: 'PUTYPE',
          field: 'PUTYPENO'
        },
      },{transaction});

      await transaction.commit();
    }catch(err){
      await transaction.rollback();
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {

  }
};
