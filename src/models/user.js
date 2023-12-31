const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");

const userModel = sequelize.define("Users",{
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  firstName:{
    type: DataTypes.STRING,
    allowNull:false

  },
  lastName:{
    type: DataTypes.STRING,
    allowNull:false
  },
  email:{
    type: DataTypes.STRING,
    allowNull:false,
    unique: true,
    validate:{
        isEmail: true,
    }
  },
  password:{
    type: DataTypes.STRING,
    allowNull:false
  },
  deleted:{
    type: DataTypes.BOOLEAN,
    defaultValue:false,
    allowNull:false
  }
});

module.exports = userModel;

