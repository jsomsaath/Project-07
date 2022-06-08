const {Sequelize} = require('sequelize');
const dotenv = require('dotenv').config();

const sequelize = new Sequelize(process.env.SQL_DATABASE_NAME, process.env.SQL_USER, process.env.SQL_PASSWORD,{
    dialect: 'mysql',
    host: process.env.PORT,
    logging: false
});

const checkConnection =async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

checkConnection()

module.exports = sequelize