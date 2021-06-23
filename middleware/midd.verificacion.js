const jwt = require('jsonwebtoken');
const Joi = require('joi')
const validaciones = require('./midd.validacion')
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

module.exports.validarLogin = async (req, res, next) => {
    try{
        await Joi.attempt(req.body, validaciones.modelLogin, 'Los datos ingresados no son correctos para el login')
        return next()
    }catch (err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}

module.exports.validarRegistro = async (req, res, next) => {
    try{
        await Joi.attempt(req.body, validaciones.modelRegistro, 'Los datos ingresados no son correctos para realizar el registro');
        return next()
    }catch (err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}

module.exports.validarActualizacion = async (req, res, next) => {
    try{
        await Joi.attempt(req.body, validaciones.modelActualiza, 'Los datos ingresados no son correctos para actualizar sus datos');
        return next()
    }catch (err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}
