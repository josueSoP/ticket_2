const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;

module.exports.verificacionUsuario = async (req,res,next)=>{
    let token = req.headers.authorization
    if (token != undefined){
        try {
            let tokenchk = token.split(' ')[1]
            let verificado = jwt.verify(tokenchk, secret)
            if (verificado){
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