const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      active:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      role:{
        type: DataTypes.INTEGER,
        defaultValue:2        
      }

    });
  
    return User;
  };
  