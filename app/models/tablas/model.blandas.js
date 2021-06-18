const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../../db/db')
  
  const Blandas = sequelize.define('blandas', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    hb_enfocado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hb_trabajoEq: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hb_comprometido: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hb_comunicacion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hb_aprendizaje: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hb_resProblem: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    timestamps: true
  })

  module.exports = Blandas
