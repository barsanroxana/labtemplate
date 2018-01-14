'use strict';
module.exports = (sequelize, DataTypes) => {
  var fructe = sequelize.define('fructe', {
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
  return fructe;
};