'use strict';
import { Sequelize, Model, DataTypes } from 'sequelize';
import Models from './index';

class MENU_CATEGORY extends Model {
    static initialize(sequelize: Sequelize) {
        this.init({
            menuCategoryNo: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                field: 'MENU_CATEGORYNO',
                allowNull: false,
                primaryKey: true
            },
            menuCategoryName: {
                type: DataTypes.STRING(50),
                field: 'MENU_CATEGORYNAME',
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

export default MENU_CATEGORY;