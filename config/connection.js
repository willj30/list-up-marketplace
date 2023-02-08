const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'listup_db',
    'root',
    'mypassword',
    {
        host: '127.0.0.1',
        dialect: 'mysql',
        port: 3306
    }
);

module.exports = sequelize;