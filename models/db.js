const { Sequelize } = require("sequelize");

const DEFAULT_DATABASE_URL = "mysql://Node:Pass@localhost:3306/nodejs_projet";

const connection = new Sequelize(
  process.env.DATABASE_URL || DEFAULT_DATABASE_URL
);

connection.authenticate().then(() => console.log("Database connected"));

module.exports = connection;

