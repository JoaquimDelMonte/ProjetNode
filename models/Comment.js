const { Model, DataTypes } = require("sequelize");
const connection = require("./db");
const User = require("./User");
const Event = require("./Event");

class Comment extends Model {}

Comment.init(
  {
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
  }
);

Comment.belongsTo(User);
Comment.belongsTo(Event);

module.exports = Comment;
