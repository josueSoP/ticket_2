const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../../db/db')
  
  const Blandas = sequelize.define('blandas', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    enfocado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    trabajoEq: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comprometido: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comunicacion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    aprendizaje: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    resProblem: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    timestamps: true
  })

  module.exports = Blandas
