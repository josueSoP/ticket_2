const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;

module.exports.verificacionUsuario = async (req,res,next)=>{
    let token = req.headers.authorization
    // console.log(token)
    if (token != undefined){
        let tokenchk = token.split(' ')[1]
        try{
            let resultado = jwt.verify(tokenchk, secret)
            console.log(resultado)
            if (resultado){
                return next
            }else {
                throw new Error ('Token no valido')
            }
        }catch {
            return res.status(400).json('el Token no es valido')
        }
        
    }else {
        res.status(400).json('Este sistema es privado y seguro, necesita un Token para ingresar')
    }
}

module.exports.verificacionUsuari = async (req,res,next)=>{
    let token = req.headers.authorization
    if (token != undefined){
        try {
            let tokenchk = token.split(' ')[1]
            let verificado = jwt.verify(tokenchk, process.env.SECRET_KEY)
            if (verificado){
                next();                
            } else  {
                throw new Error ('Token no valido')  
            }
        } catch (error) {
            return res.status(400).json('el Token no es valido')
        }
    }else {
        res.status(400).json('Este sistema es privado y seguro, necesita un Token para ingresar')
    }
}

