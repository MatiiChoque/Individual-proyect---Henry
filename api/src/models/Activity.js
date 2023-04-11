const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "activity",
    {
      id: {
        type: DataTypes.UUID,
        defaultValues: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      dificulty: {
        type: DataTypes.ENUM,
        values: ["1", "2", "3", "4", "5"],
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER, //? AVERIGUAR PARA QUE EL FORMATO SEA '(NUMERO) HS'
        allowNull: true,
      },
      season: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["Summer", "Autumn", "Winter", "Spring"],
      },
      createInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};
