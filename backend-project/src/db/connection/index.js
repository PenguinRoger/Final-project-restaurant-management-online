'use strict';
import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

import {config} from './mssql_database.js';
// const sequelize = new Sequelize(`${process.env.APP_DB_NAME || 'WEBPM_Dev'}`, `${process.env.APP_DB_USERNAME || 'sa' }`, `${process.env.APP_DB_PASSWORD || 'Om@4108459' }`, 
// { ...config, isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.REPEATABLE_READ });

const sequelize = new Sequelize('WEBPM_Dev', 'sa', 'p@ssw0rd', {
    host: 'localhost',
    dialect: 'mssql'
  });

export { sequelize };
export const IsolationLevel = Sequelize.Transaction.ISOLATION_LEVELS;