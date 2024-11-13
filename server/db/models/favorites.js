"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favorites extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "user_id",
      });
      this.belongsTo(models.Renta, {
        foreignKey: "renta_id",
      });
    }
  }
  Favorites.init(
    {
      user_id: DataTypes.INTEGER,
      renta_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Favorites",
    }
  );
  return Favorites;
};
