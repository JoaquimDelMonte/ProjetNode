const { Model, DataTypes } = require("sequelize");
const connection = require("./db");
const User = require("./User");

class Event extends Model {}

Event.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    location: DataTypes.STRING,
    maxParticipants: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
  }
);

Event.belongsTo(User, { as: "creator", foreignKey: "creatorId" });

module.exports = Event;
