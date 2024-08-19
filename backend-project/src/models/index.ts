import {
    Sequelize,
  } from 'sequelize';
  import MENU_CATEGORY from './MENU_CATEGORY';
  import SUB_MENU_CATEGORY from './SUB_MENU_CATEGORY';
  import MENU from './MENU';

  export type models = {
    sequelize: Sequelize
  }

  class Models {
    public sequelize: Sequelize;
    public MENU_CATEGORY: typeof MENU_CATEGORY;
    public SUB_MENU_CATEGORY: typeof SUB_MENU_CATEGORY;
    public MENU: typeof MENU;

    public constructor(sequelize: Sequelize) {
      this.sequelize = sequelize;
      this.MENU_CATEGORY = MENU_CATEGORY.initialize(sequelize);
      this.SUB_MENU_CATEGORY = SUB_MENU_CATEGORY.initialize(sequelize);
      this.MENU = MENU.initialize(sequelize);

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