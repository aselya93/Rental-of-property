"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "Administrator",
        email: "admin@example.com",
        password: await bcrypt.hash('123', 8), // не понятно что с хешем и как их закинуть сразу хешированными
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Алиса Иванова",
        email: "alisa.ivanova@example.com",
        password: await bcrypt.hash('123', 8),
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Борис Смирнов",
        email: "boris.smirnov@example.com",
        password: await bcrypt.hash('123', 8),
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Виктория Кузнецова",
        email: "viktoria.kuznetsova@example.com",
        password: await bcrypt.hash('123', 8),
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Дмитрий Соколов",
        email: "dmitry.sokolov@example.com",
        password: await bcrypt.hash('123', 8),
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Екатерина Попова",
        email: "ekaterina.popova@example.com",
        password: await bcrypt.hash('123', 8),
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};