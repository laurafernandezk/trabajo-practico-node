const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");
const bookModel = require("./book")


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
  },
  /*deleted:{
    type: DataTypes.BOOLEAN,
    defaultValue:false,
    allowNull:false
  }*/
});

/*libraryModel.hasMany(bookModel)
bookModel.belongsTo(libraryModel)*/

module.exports = libraryModel;

