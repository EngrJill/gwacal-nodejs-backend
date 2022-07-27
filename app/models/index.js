//Import DB configurations
const dbConfig = require("../config/config.js");
const Sequelize = require("sequelize");
//Initialize credentials for databse connection with ORM sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
//Initialize an empty JSON that will be filled with sequlize functions
const db = {};
//Initialize Sequelize in the empty JSON
db.Sequelize = Sequelize;
//Initialize empty JSON with sequelize equipped with db config
db.sequelize = sequelize;

db.subjects = require("./subjectSchema.js")(sequelize, Sequelize);
db.user = require("./userSchema.js")(sequelize, Sequelize);
module.exports = db;