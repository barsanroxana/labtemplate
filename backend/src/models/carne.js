'use strict';
module.exports = (sequelize, DataTypes) => {
  var Carne = sequelize.define('Carne', {
    numeProdus: DataTypes.STRING,
    tipCarne: DataTypes.STRING,
    cantitatete: DataTypes.INTEGER,
    pret: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Carne;
};