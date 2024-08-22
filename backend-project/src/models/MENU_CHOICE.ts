'use strict';
import { Sequelize, Model, DataTypes } from 'sequelize';
import Models from './index';

class MENU_CHOICE extends Model {
    static SUB_MENU_CHOICE;
    static initialize(sequelize: Sequelize) {
        this.init({
            menuChoiceNo: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                field: 'MENU_CHOICENO',
                allowNull: false,
                primaryKey: true
            },
            menuChoiceName: {
                type: DataTypes.STRING(50),
                field: 'MENU_CHOICENAME',
                allowNull: true
            },
            subMenuChoiceNo: {
                type: DataTypes.INTEGER,
                field: 'SUB_MENU_CHOICENO',
                allowNull: true,
                references: {
                    model: 'SUB_MENU_CHOICE',
                    key: 'SUB_MENU_CHOICENO'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
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
            modelName: 'MENU_CHOICE',
            tableName: 'MENU_CHOICE',
            createdAt: 'CREATEDATE',
            updatedAt: 'UPDATEDATE',
            deletedAt: 'DELETEDATE',
        });
        return this;
    }

    static associate(models: Models) {
        MENU_CHOICE.SUB_MENU_CHOICE = MENU_CHOICE.hasMany(models.SUB_MENU_CHOICE, {
             as: 'subMenuChoice', foreignKey: 'menuChoiceNo' 
        });
    }
}

export default MENU_CHOICE;