import {
    Sequelize,
  } from 'sequelize';
  import MENU_CATEGORY from './MENU_CATEGORY';
  import SUB_MENU_CATEGORY from './SUB_MENU_CATEGORY';
  import MENU from './MENU';
  import MENU_CHOICE from './MENU_CHOICE';
  import SUB_MENU_CHOICE from './SUB_MENU_CHOICE';

  export type models = {
    sequelize: Sequelize
  }

  class Models {
    public sequelize: Sequelize;
    public MENU_CATEGORY: typeof MENU_CATEGORY;
    public SUB_MENU_CATEGORY: typeof SUB_MENU_CATEGORY;
    public MENU: typeof MENU;
    public MENU_CHOICE: typeof MENU_CHOICE;
    public SUB_MENU_CHOICE: typeof SUB_MENU_CHOICE;

    public constructor(sequelize: Sequelize) {
      this.sequelize = sequelize;
      this.MENU_CATEGORY = MENU_CATEGORY.initialize(sequelize);
      this.SUB_MENU_CATEGORY = SUB_MENU_CATEGORY.initialize(sequelize);
      this.MENU = MENU.initialize(sequelize);
      this.MENU_CHOICE = MENU_CHOICE.initialize(sequelize);
      this.SUB_MENU_CHOICE = SUB_MENU_CHOICE.initialize(sequelize);

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