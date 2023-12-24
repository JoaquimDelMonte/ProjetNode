const { DataTypes } = require("sequelize");
const connection = require("./db");
const User = require("./User");

const Event = connection.define(
  "Event",
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
  }
);

Event.belongsTo(User, { as: "creator", foreignKey: "creatorId" });
Event.hasMany(Participation);
Event.hasMany(Comment);

module.exports = Event;
