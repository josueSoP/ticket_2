const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../db/db')

//Definir mi Modelo con que voy a trabajar
const Usuarios = sequelize.define('usuarios', {
  id : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombres : {
      type: DataTypes.STRING(50),
      allowNull: false,
  },
  apellidos: {
      type: DataTypes.STRING(50),
      allowNull: false,
  },
  usuario: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  pass: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  // rol: {
  //   type: DataTypes.STRING(20),
  //   allowNull: true
  // },
  imagen: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
},{
  timestamps: true
})

module.exports = Usuarios;

// ////////MODULOS PARA LOGIN//////////////////
//   module.exports.existenciaDeUsuario = async (usr)=>{
//   //chequear con la base de datos que exista el usuario
//   let resultado = await Usuarios.findOne({where: {usuario:usr.usuario}})
//   if (resultado === null){
//       return false
//   }else {
//       return true
//   }
//   }

// module.exports.usuarioAutenticado = async (usr)=>{
// //chequear con la base de datos que exista el usuario
// let resultado = await Usuarios.findOne({where: {usuario:usr.usuario, pass: usr.pass}})
// if (resultado === null){
//     return false
// }else {
//     return true
// }
// }

// ////////modulo para datos del usuario
// module.exports.recuperarInfoUser = async (usr) => {
// let resultado = await Usuarios.findAll({where: {usuario:usr.usuario, pass: usr.pass}})
// if (resultado === null){
//   return false
// }else {
//   return resultado[0]
// }
// }


// //////////// MODELOS PARA REGISTRO DE USUARIOS ///////////////////
//   module.exports.listar = async () => {
//     let resultado = await sequelize.query('SELECT * FROM usuarios')
//     return resultado[0]
//   }

//   module.exports.nuevoUsuario = async (data)=> {
//     try {
//         let resultado = await Usuarios.findOne({where:{email: data.email}})
//         if (resultado != null){
//           alert("Error en la creacion del usuario o el usuario ya existe")
//           return false; 
//         }else {            
//             await Usuarios.create(({nombres: data.nombres, apellidos: data.apellidos, email: data.email, usuario: data.usuario, pass: data.pass}))
//             return true;
//         }
//     }catch (err) {
//         console.log(err)
//         throw new Error (err)
//     }
//   }

//   //////////// MODELO PARA MODIFICAR DE USUARIOS ///////////////////
//   module.exports.buscarUsuarios = async (data) => {
//     try{
//       let resultado = await Usuarios.findAll({
//         where: { id : data }
//       })
//       return resultado[0]
//     }catch (err) {
//       throw new Error (err)
//     }
//   }