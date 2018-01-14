'use strict';
module.exports = (sequelize, DataTypes) => {
  var Legume = sequelize.define('legume', {
    numeProdus: DataTypes.STRING,
    cantitatete: DataTypes.INTEGER,
    pret: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Legume;
};