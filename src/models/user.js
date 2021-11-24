"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.RoomEvent, {
        foreignKey: "events",
      });
      User.hasMany(models.Room, {
        foreignKey: "created_rooms",
      });
    }
  }
  User.init(
    {
      fullname: DataTypes.STRING,
      email: DataTypes.STRING,
      birthDate: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
