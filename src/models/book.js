const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");

const bookModel = sequelize.define("Books",{
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  isbn:{
    type: DataTypes.NUMBER,
    allowNull:false

  },
  title:{
    type: DataTypes.STRING,
    allowNull:false
  },
  author:{
    type: DataTypes.STRING,
    allowNull:false
  }, 
  year:{
    type: DataTypes.STRING,
    allowNull:false
  },
  library:{
    type: DataTypes.NUMBER,
    allowNull:false
  }
});

module.exports = bookModelook;
