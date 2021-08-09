const Sequelize = require('sequelize');
const DbConfig  = require('../config/database');

const Message = require('../models/Message');

const connection = new Sequelize(DbConfig);

Message.init(connection);

module.exports = connection;