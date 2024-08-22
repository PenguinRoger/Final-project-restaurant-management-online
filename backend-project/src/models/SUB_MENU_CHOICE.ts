'use strict';
import { Sequelize, Model, DataTypes } from 'sequelize';
import Models from './index';

class SUB_MENU_CHOICE extends Model {
    static MENU_CHOICE;
    static initialize(sequelize: Sequelize) {
        this.init({
            subMenuChoiceNo: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                field: 'SUB_MENU_CHOICENO',
                allowNull: false,
                primaryKey: true
            },
            subMenuChoiceName: {
                type: DataTypes.STRING,
                field: 'SUB_MENU_CHOICENAME',
                allowNull: true
            },
            menuChoiceNo: {
                type: DataTypes.INTEGER,
                field: 'MENU_CHOICENO',
                allowNull: false,
                references: {
                    model: 'MENU_CHOICE',
                    key: 'MENU_CHOICENO'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            subMenuChoicePrice: {
                type: DataTypes.DECIMAL(15, 2),
                field: 'SUB_MENU_CHOICEPRICE',
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
            modelName: 'SUB_MENU_CHOICE',
            tableName: 'SUB_MENU_CHOICE',
            createdAt: 'CREATEDATE',
            updatedAt: 'UPDATEDATE',
            deletedAt: 'DELETEDATE',
            paranoid: true, // Enables soft deletes (marks record as deleted without actually removing it from the database)
        });
        return this;
    }

    static associate(models: Models) {
        SUB_MENU_CHOICE.MENU_CHOICE= SUB_MENU_CHOICE.belongsTo(models.MENU_CHOICE, {
            as: 'menuChoice', foreignKey: 'menuChoiceNo',
        });
    }
}

export default SUB_MENU_CHOICE;
