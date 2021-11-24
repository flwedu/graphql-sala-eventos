"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Room.hasOne(models.User, {
        foreignKey: "creator_user_id",
      });
      Room.belongsToMany(models.RoomEvent, {
        foreignKey: "room_events",
      });
    }
  }
  Room.init(
    {
      name: DataTypes.STRING,
      localization: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Room",
    }
  );
  return Room;
};
