import {
    Sequelize,
  } from 'sequelize';

  import Menu_Category from './MENU_CATEGORY';


  class Models {
    public sequelize: Sequelize;

    public Menu_Category: typeof Menu_Category;
  

  public constructor(sequelize: Sequelize) {
    this.sequelize = sequelize;

    this.Menu_Category = Menu_Category.initialize(sequelize);

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