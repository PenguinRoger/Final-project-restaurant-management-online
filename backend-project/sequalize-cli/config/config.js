require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.APP_DB_USERNAME,
    "password": process.env.APP_DB_PASSWORD,
    "port": process.env.APP_DB_PORT,
    "database": process.env.APP_DB_NAME,
    "dialect": process.env.APP_DB_DIALECT,
    "logging": false,
    "host": process.env.APP_DB_HOST,
    "dialectOptions": {
      "requestTimeout": 30000,
    }
  }
}