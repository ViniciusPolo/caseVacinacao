'use strict';

const { query } = require("express");

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      senha: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      created_at: {
        type:Sequelize.DATE,
        allowNull:false,
      },
      updated_at: {
        type:Sequelize.DATE,
        allowNull:false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};