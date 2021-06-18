const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../../db/db')

//Definir mi Modelo con que voy a trabajar
const Conocimientos = sequelize.define('conocimientos', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    BD: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    apis: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    testing: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    seguridad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    teoriaObj: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    timestamps: true
  })

  module.exports = Conocimientos