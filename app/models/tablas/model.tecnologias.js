const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../../db/db')

  const Tecnologias = sequelize.define('tecnologias', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nodeJs: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    frontend: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    swagger: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    JS: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    timestamps: true
  })

  module.exports = Tecnologias
