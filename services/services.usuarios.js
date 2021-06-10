const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY

module.exports.generaToken = async (data)=>{
    try {
        let resultado = jwt.sign({data}, secret);
        return resultado
        
    }catch (err){
        console.log(err)
        throw new Error (err)
    }
};

// const dbUsuarios = require('../db/db.usuarios')

// module.exports.chequearUsuario = async (usr)=>{
//     let usrchk = usr
//     try {
//         let resultado =  await dbUsuarios.existenciaDeUsuario(usrchk)

//         if (!resultado) {
//             return resultado
//         }else {
//             throw new Error ('No existe el usuario')
//         }
//     }catch (err){
//         console.log(err)
//         throw new Error (' no semuy bien que paso')
//     }
// }