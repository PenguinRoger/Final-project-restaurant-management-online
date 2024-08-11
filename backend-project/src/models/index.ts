import {
    Sequelize,
} from 'sequelize';

  import Menu from "./Menu";

  export type models = {
    sequelize: Sequelize,
  }
  class Models {
    public sequelize: Sequelize;
    public Menu: typeof Menu;
  
  public constructor(sequelize: Sequelize) {
    this.sequelize = sequelize
    this.Menu = Menu.initialize(sequelize)
    
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