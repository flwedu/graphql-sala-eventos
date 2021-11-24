"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RoomEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RoomEvent.hasOne(models.Room, {
        foreignKey: "room_id",
      });
      RoomEvent.hasOne(models.User, {
        foreignKey: "creator_user_id",
      });
      RoomEvent.hasMany(models.User, {
        foreignKey: "users_id",
      });
    }
  }
  RoomEvent.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      minimumAge: DataTypes.INTEGER,
      startingHour: DataTypes.DATE,
      endingHour: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "RoomEvent",
    }
  );
  return RoomEvent;
};
