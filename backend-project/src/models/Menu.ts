'use strict';
import { Sequelize, Model, DataTypes } from 'sequelize';
import Models from './index'

class Menu extends Model {
    static initialize(sequelize: Sequelize) {
        this.init({
            menuId: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                field: 'MENUID',
                allowNull: false,
                primaryKey: true
            },
            menuName: {
                type: DataTypes.STRING(50),
                field: 'MENUNAME',
                allowNull: true
            },
            menuPrice: {
                type: DataTypes.INTEGER,
                field: 'MENUPRICE',
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
            modelName: 'Menu',
            tableName: 'Menu',
            createdAt: 'CREATEDATE',
            updatedAt: 'UPDATEDATE',
            deletedAt: 'DELETEDATE',
        });
        return this;
    }

    static associate(models: Models) {

    }
}

export default Menu;