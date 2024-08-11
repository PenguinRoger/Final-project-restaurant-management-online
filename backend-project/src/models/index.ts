import {
    Sequelize,
  } from 'sequelize';



  class Models {
    public sequelize: Sequelize;

  

  public constructor(sequelize: Sequelize) {


    this.loopAssociates();
  }

  private loopAssociates() {
    for (const prop in this) {
      if (this.hasOwnProperty(prop)) {
        const modelInstance = this[prop] as any;
        if (typeof modelInstance.associate === 'function') {
          modelInstance.associate(this)
        }
      }
    }
  }
}

export default Models;