"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Favorites", [
      { user_id: 1, renta_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 1, renta_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, renta_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, renta_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, renta_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, renta_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, renta_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, renta_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 5, renta_id: 9, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 5, renta_id: 10, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 6, renta_id: 9, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 6, renta_id: 10, createdAt: new Date(), updatedAt: new Date() },
      
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Favorites", null, {});
  },
};
