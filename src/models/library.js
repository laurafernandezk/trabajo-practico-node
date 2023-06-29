const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");

const libraryModel = sequelize.define("Libraries",{
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  name:{
    type: DataTypes.STRING,
    allowNull:false

  },
  location:{
    type: DataTypes.STRING,
    allowNull:false
  },
  telephone:{
    type: DataTypes.STRING,
    allowNull:false
  }
});

module.exports = libraryModel;

