const { Model, DataTypes } = require('sequelize');

class Message extends Model {
  static init(sequelize) {
    super.init({
      from: DataTypes.STRING,
      target_id: DataTypes.STRING,
      media: DataTypes.BOOLEAN,
      message: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'message'
    });
  }
}

module.exports = Message;