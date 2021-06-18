const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../../db/db')
  
  const Desempeno = sequelize.define('desempeno', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    de_calidadCod: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    de_velEntrega: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    de_performanceCod: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    timestamps: true
  })

  module.exports = Desempeno
