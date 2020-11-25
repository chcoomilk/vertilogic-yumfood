'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      vendor.hasMany(models.dish, { foreignKey: 'vendor_id' });
      vendor.hasMany(models.taggable, { foreignKey: 'taggable_id' });
      vendor.belongsToMany(models.tag, { through: models.taggable, foreignKey: 'taggable_id', targetKey: 'id' });
    }
  };
  vendor.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 128]
      }
    },
    logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'vendor',
    underscored: true
  });
  return vendor;
};