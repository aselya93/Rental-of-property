"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Renta extends Model {
    static associate(models) {
      this.hasMany(models.Favorites, {
        foreignKey: "renta_id",
      });

      this.belongsTo(models.Category, {
        foreignKey: "category_id",
      });
    }
  }
  Renta.init(
    {
      category_id: DataTypes.INTEGER,
      title: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      photo: DataTypes.TEXT,
      location: DataTypes.TEXT,
      points_latitude: DataTypes.INTEGER,
      points_longitude: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Renta",
    }
  );
  return Renta;
};
