const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../../db/db')
  
  const Entornos = sequelize.define('entornos', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    github: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    trello: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    slack: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    agiles: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    timestamps: true
  })

  module.exports = Entornos
