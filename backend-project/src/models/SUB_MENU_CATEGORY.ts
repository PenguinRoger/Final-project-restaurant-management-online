'use strict';
import { Sequelize, Model, DataTypes } from 'sequelize';
import Models from './index';

class SUB_MENU_CATEGORY extends Model {
    static MENU_CATEGORY;
    static initialize(sequelize: Sequelize) {
        this.init({
            subMenuCategoryNo: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                field: 'SUB_MENU_CATEGORYNO',
                allowNull: false,
                primaryKey: true
            },
            subMenuCategoryName: {
                type: DataTypes.STRING,
                field: 'SUB_MENU_CATEGORYNAME',
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
            subMenuCategoryPrice: {
                type: DataTypes.DECIMAL(15, 2),
                field: 'SUB_MENU_CATEGORYPRICE',
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
            modelName: 'SUB_MENU_CATEGORY',
            tableName: 'SUB_MENU_CATEGORY',
            createdAt: 'CREATEDATE',
            updatedAt: 'UPDATEDATE',
            deletedAt: 'DELETEDATE',
            paranoid: true, // Enables soft deletes (marks record as deleted without actually removing it from the database)
        });
        return this;
    }

    static associate(models: Models) {
        SUB_MENU_CATEGORY.MENU_CATEGORY= SUB_MENU_CATEGORY.belongsTo(models.MENU_CATEGORY, {
            as: 'menuCategory', foreignKey: 'menuCategoryNo',
        });
    }
}

export default SUB_MENU_CATEGORY;
