const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("Task", {
      taskName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      taskDescription: {
        type: DataTypes.STRING,
        allowNull: false
      },
    });
    
  
    return Task;
  };
  