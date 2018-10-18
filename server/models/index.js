const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

const models = {
    User: sequelize.import('./user'),
    Message: sequelize.import('./message'),
};