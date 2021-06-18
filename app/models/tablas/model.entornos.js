const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../../db/db')
  
  const Entornos = sequelize.define('entornos', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ep_github: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ep_trello: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ep_slack: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ep_agiles: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    timestamps: true
  })

  module.exports = Entornos
