"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", [
      {
        name: "Комната",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Квартира",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Дом",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
