"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "Administrator",
        email: "admin@example.com",
        password: "$2y$10$bk8x8f8nEsREQaeCU5hXWO0X28w5pz/TzHUcLAlwZFkca9ejSZb0q", // не понятно что с хешем и как их закинуть сразу хешированными
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Алиса Иванова",
        email: "alisa.ivanova@example.com",
        password: "$2y$10$F6jmeglT141uK0CggQkKp.upg.im/muw/pJZeHcBjkYSGHMVLFF6W",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Борис Смирнов",
        email: "boris.smirnov@example.com",
        password: "$2y$10$iwx634RDpNVkzKieayDqQOaguCjQXtJkSfA74P9ofyO/09j5bwyoa",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Виктория Кузнецова",
        email: "viktoria.kuznetsova@example.com",
        password: "$2y$10$o.k8yp08pOzjQtzKZZw9RuRPKhPZ/TApn//0eQmMmCUclOKI.Hx5W",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Дмитрий Соколов",
        email: "dmitry.sokolov@example.com",
        password: "$2y$10$2ImF13HhjlxasyD3HrxR5.rfzs7GnJxThUdmwEjbBw4.NlTlStEty",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Екатерина Попова",
        email: "ekaterina.popova@example.com",
        password: "$2y$10$vy2iCzhgBCEed7dfSSxeau8su9V8Lxgixdv3cx9arkxTVsiqPYdnu",
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