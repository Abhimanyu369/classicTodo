const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
