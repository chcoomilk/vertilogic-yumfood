'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class taggable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      taggable.belongsTo(models.tag, { foreignKey: 'tag_id', targetKey: 'id' });
      taggable.belongsTo(models.vendor, { foreignKey: 'taggable_id', targetKey: 'id' });
    }
  };
  taggable.init({
    tag_id: DataTypes.INTEGER,
    taggable_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'taggable',
    underscored: true
  });
  return taggable;
};