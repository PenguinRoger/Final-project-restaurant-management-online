'use strict';
import { Sequelize, Model, DataTypes } from 'sequelize';
import Models from './index';

class MENU extends Model {
    static MENU_CATEGORY;
    static initialize(sequelize: Sequelize) {
        this.init({
            menuNo: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                field: 'MENUNO',
                allowNull: false,
                primaryKey: true
            },
            menuName: {
                type: DataTypes.STRING,
                field: 'MENUNAME',
                allowNull: true
            },
            menuSubName: {
                type: DataTypes.STRING,
                field: 'MENU_SUBNAME',
                allowNull: true
            },
            menuCategoryNo: {
                type: DataTypes.INTEGER,
                field: 'MENU_CATEGORYNO',
                allowNull: false,
                references: {
                    model: 'MENU_CATEGORY',
                    key: 'MENU_CATEGORYNO'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            menuPrice: {
                type: DataTypes.DECIMAL(15, 2),
                field: 'MENUPRICE',
                allowNull: true
            },
            menuImage: {
                type: DataTypes.STRING,
                field: 'MENUIMG',
                allowNull: true
                },
            createUser: {
                type: DataTypes.INTEGER,
                field: 'CREATEUSER',
                allowNull: true,
                defaultValue: 0
            },
            updateUser: {
                type: DataTypes.INTEGER,
                field: 'UPDATEUSER',
                allowNull: true,
                defaultValue: 0
            },
            deleteUser: {
                type: DataTypes.INTEGER,
                field: 'DELETEUSER',
                allowNull: true
            }
        }, {
            sequelize,
            modelName: 'MENU',
            tableName: 'MENU',
            createdAt: 'CREATEDATE',
            updatedAt: 'UPDATEDATE',
            deletedAt: 'DELETEDATE',
            paranoid: true,
        });
        return this;
    }

    static associate(models: Models) {
        MENU.MENU_CATEGORY= MENU.belongsTo(models.MENU_CATEGORY, {
            as: 'menuCategory', foreignKey: 'menuCategoryNo',
        });
    }
}

export default MENU;
