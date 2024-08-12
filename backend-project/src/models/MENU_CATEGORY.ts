'use strict'
import { Sequelize, Model, DataTypes } from 'sequelize';
import Models from './index';

class Menu_Category extends Model {
    static initialize(sequelize: Sequelize) {
        this.init({
            MenuCategoryNo: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                field: 'MENU_CATEGORYNO',
                allowNull: false,
                primaryKey: true
              },
              MenuCategoryName: {
                type: DataTypes.STRING(50),
                field: 'MENU_CATEGORYNAME',
                allowNull: true
              },
              createUser: {
                type: DataTypes.INTEGER,
                field: 'CREATEUSER',
                allowNull: true
              },
              updateUser: {
                type: DataTypes.INTEGER,
                field: 'UPDATEUSER',
                allowNull: true
              },
              siteNo: {
                type: DataTypes.INTEGER,
                field: 'SITENO',
                allowNull: false
              },
              deleteUser: {
                type: DataTypes.INTEGER,
                field: 'DELETEUSER',
                allowNull: true
              }
        }, {
            sequelize,
            modelName: 'MENU_CATEGORY',
            tableName: 'MENU_CATEGORY',
            createdAt: 'CREATEDATE',
            updatedAt: 'UPDATEDATE',
            deletedAt: 'DELETEDATE',
        });
        return this;
    }
    static associate(models: Models) {

    }
}

export default Menu_Category;