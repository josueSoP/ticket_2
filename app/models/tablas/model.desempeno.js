const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../../db/db')
  
  const Desempeno = sequelize.define('desempeno', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    calidadCod: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    velEntrega: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    performanceCod: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    timestamps: true
  })

  module.exports = Desempeno
