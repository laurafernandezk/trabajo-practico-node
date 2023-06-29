const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

const initializeDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexion con la base de datos establecida");
    await sequelize.sync({ force: true });
  } catch (error) {
    console.log(
      console.log("Hubo un error al inicializar la base de datos", error)
    );
  }
};

module.exports = { sequelize, initializeDB };
