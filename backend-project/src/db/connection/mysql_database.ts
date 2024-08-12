'use strict';
import { Sequelize ,Options} from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const config :Options = {
    "dialect": "mysql",
    "port": !!process.env.APP_DB_PORT ? parseInt(process.env.APP_DB_PORT) : null,
    "logging": process.env.NODE_ENV==="development",
    "host": `${process.env.APP_DB_HOST || 'localhost'}`,
    "dialectOptions": {
        "requestTimeout": 30000,
        "options": {
            "instanceName": process.env.APP_DB_INSTANCE_NAME
        }
    },
    omitNull:true,
}

const sequelize = new Sequelize(
    process.env.APP_DB_NAME, 
    process.env.APP_DB_USERNAME, 
    process.env.APP_DB_PASSWORD, 
    config);

export default sequelize ;