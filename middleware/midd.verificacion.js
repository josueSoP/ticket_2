const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;

module.exports.verificacionUsuario = async (req,res,next)=>{
    let token = req.headers.authorization
    if (token != undefined){
        try {
            let tokenchk = token.split(' ')[1]
            let verificado = jwt.verify(tokenchk, secret)
            if (verificado){
                req.user= verificado
                next();                
            } else  {
                throw new Error ('Token no valido')  
            }
        } catch (error) {
            return res.status(400).send('el Token no es valido')        
        }
    }else {
        res.status(400).json('Este sistema es privado y seguro, necesita un Token para ingresar')
    }
}

// module.exports.verificacionUsuaria = async (req,res,next)=>{
//     let tokenn = req.headers.authorization
//     if (!tokenn){
//         return res.status(400).send('Este sistema es privado y seguro, necesita un Token para ingresar')        
//     }
//         let token = tokenn.split(' ')[1]
//         try {   
//             let resultado = jwt.verify(token, secret);
//             if (resultado.exp <= moment().unix()){//si una fecha de expiracion menor a la de hoy
//                 return res.status(400).send({message:'el Token nha expirado'});
//             }
//         } catch (ex) {
//             return res.status(400).send({nessage:'el Token no es valido'});
//         }
//         req.user= resultado
//         next();
    
// }