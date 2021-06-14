const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../db/db')

//Definir mi Modelo con que voy a trabajar
const Chat = sequelize.define('chat', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {//al que sigo
      type: DataTypes.INTEGER,
      references: {
          model: 'usuarios',
          key: 'id'
       }
    },
    emisor: {
      type: DataTypes.INTEGER,
      references: {
          model: 'usuarios',
          key: 'id'
       }
    },
    receptor: {
      type: DataTypes.INTEGER,
      references: {
          model: 'usuarios',
          key: 'id'
       }
    },
    texto : {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    fecha: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  },{
    timestamps: true
  })

  module.exports = Chat
