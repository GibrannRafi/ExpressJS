const dotenv = require('dotenv')//import module dotenv
dotenv.config()

module.exports = {
    "development": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DEVELOPMENT,
      "host": process.env.DB_HOST,
      "dialect": process.env.DB_DIALECT
    },
    "test": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DEVELOPMENT,
      "host": process.env.DB_HOST,
      "dialect": process.env.DB_DIALECT
    },
    "production": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DEVELOPMENT,
      "host": process.env.DB_HOST,
      "dialect": process.env.DB_DIALECT
  }
}