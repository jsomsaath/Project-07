const dotenv = require('dotenv');
const Sequelize = require('sequelize');
dotenv.config();
const dataB = require('../db/db')

const sequelize = new Sequelize(process.env.SQL_DATABASE_NAME, process.env.SQL_USER, process.env.SQL_PASSWORD, {
    host: process.env.PORT,
    dialect: 'mysql'
  });

  const db = {};


db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.posts = require("./post.js")(sequelize, Sequelize);
db.users = require("./user.js")(sequelize, Sequelize)
db.comments = require("./comment.js")(sequelize, Sequelize)

db.users.hasMany(db.posts)
db.posts.belongsTo(db.users)

db.posts.hasMany(db.comments)
db.comments.belongsTo(db.posts)

db.users.hasMany(db.comments)
db.comments.belongsTo(db.users)

db.sequelize.sync({ alter:true });

module.exports = db;