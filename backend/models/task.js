const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../database');

const Task = sequelize.define('task', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  task: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.ENUM,
    values: ['active', 'completed'],
  },
  user: {
    type: DataTypes.UUID,
  },
  completeAt: {
    type: DataTypes.DATE,
  },
});

module.exports = Task;
