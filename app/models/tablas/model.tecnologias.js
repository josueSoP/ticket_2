const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../../db/db')

  const Tecnologias = sequelize.define('tecnologias', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    te_nodeJs: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    te_frontend: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    te_swagger: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    te_JS: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    timestamps: true
  })

  module.exports = Tecnologias
