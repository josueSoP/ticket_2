const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../../db/db')

  const Extra = sequelize.define('extra', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },  
    conExtra: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    timestamps: true
  })

  module.exports = Extra
