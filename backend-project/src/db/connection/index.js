'use strict';
import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();


const sequelize = new Sequelize('restaurant-management-online', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
  });

export { sequelize };
export const IsolationLevel = Sequelize.Transaction.ISOLATION_LEVELS;