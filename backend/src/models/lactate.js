'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lactate = sequelize.define('Lactate', {
    numeProdus: DataTypes.STRING,
    provenienta: DataTypes.STRING,
    cantitatete: DataTypes.INTEGER,
    pret: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Lactate;
};