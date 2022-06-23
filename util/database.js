const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root', '30062010phat', {
    dialect: 'mysql', 
    host: 'localhost'
});
module.exports = sequelize;