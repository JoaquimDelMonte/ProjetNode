const { Model, DataTypes } = require("sequelize");
const connection = require("./db");
const User = require("./User");
const Event = require("./Event");

class Participation extends Model {}

Participation.init(
  {
    status: {
      type: DataTypes.ENUM("confirmed", "pending", "cancelled"),
      allowNull: false,
      defaultValue: "pending",
    },
  },
  {
    sequelize: connection,
  }
);

Participation.belongsTo(User);
Participation.belongsTo(Event);

module.exports = Participation;
