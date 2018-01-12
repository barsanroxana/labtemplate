'use strict';
module.exports = (sequelize, DataTypes) => {
  var Legume = sequelize.define('Legume', {
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