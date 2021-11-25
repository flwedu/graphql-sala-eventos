"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("RoomEvents", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      minimumAge: {
        type: Sequelize.INTEGER,
      },
      startingHour: {
        type: Sequelize.DATE,
      },
      endingHour: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      room_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Rooms", key: "id" },
      },
      creator_user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users", key: "id" },
      },
      users_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: { model: "Users", key: "id" },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("RoomEvents");
  },
};
