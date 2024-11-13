"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Renta", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Categories", key: "id" },
      },
      title: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      photo: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      location: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      points_latitude: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      points_longitude: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Renta");
  },
};
