const jwt = require('jsonwebtoken');
const moment = require('moment');
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

// module.exports.generaToke = async (user)=>{
//     try {
//         let resultado = {
//             sub: user.id,
//             nombres: user.nombres,
//             email : user.email,
//             usuario: user.usuario,
//             pass: user.pass,
//             // rol: user.rol,
//             imagen: user.imagen,
//             iat: moment().unix(), //fecha de creacion del token en tiempo unix
//             exp: moment().add(30,'day').unix //fecha de expiracion de 30 dias
//         };
//         jwt.sing({resultado}, secret);
//     }catch (err){
//         console.log(err)
//         throw new Error (err)
//     }
// };
