const Joi = require('joi');

module.exports = {
    modelLogin: Joi.object().keys({
        usuario: Joi.string().alphanum().min(3).max(50).required(),
        pass: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6).required()
    }).with('usuario','pass'),

    modelRegistro: Joi.object().keys({
        nombres: Joi.string().regex(/^[ .a-zA-Z]+$/).min(3).max(50).required(),
        apellidos: Joi.string().regex(/^[ .a-zA-Z]+$/).min(3).max(50).required(),
        usuario: Joi.string().alphanum().min(3).max(50).required(),
        email: Joi.string().email().max(50).required(),
        pass: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6).required(),
        imagen: Joi.string().min(3).max(100).required(),
        ciudad: Joi.string().regex(/^[ .a-zA-Z0-9]{6,16}$/).min(3).max(50).required(),
        pais: Joi.string().regex(/^[ .a-zA-Z0-9]{6,16}$/).min(3).max(50).required(),
        edad: Joi.number().min(1).allow(null).required(),
        estudios: Joi.string().regex(/^[ .a-zA-Z0-9]{6,16}$/).min(10).max(100).required(),
        linkedin: Joi.string().min(3).max(100).required(),
        hobies: Joi.string().regex(/^[ .a-zA-Z0-9]{6,16}$/).min(3).max(300).required(),
        cv: Joi.string().min(3).max(100).required()
    }),

    modelActualiza: Joi.object().keys({
        nombres: Joi.string().regex(/^[ .a-zA-Z]+$/).min(3).max(50).required(),
        apellidos: Joi.string().regex(/^[ .a-zA-Z]+$/).min(3).max(50).required(),
        usuario: Joi.string().alphanum().min(3).max(50).required(),
        email: Joi.string().email().max(50).required(),
        pass: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6).required(),
        imagen: Joi.string().min(3).max(100).required(),
        ciudad: Joi.string().regex(/^[ .a-zA-Z0-9]{6,16}$/).min(3).max(50).required(),
        pais: Joi.string().regex(/^[ .a-zA-Z0-9]{6,16}$/).min(3).max(50).required(),
        edad: Joi.number().min(1).allow(null).required(),
        estudios: Joi.string().regex(/^[ .a-zA-Z0-9]{6,16}$/).min(10).max(100).required(),
        linkedin: Joi.string().min(3).max(100).required(),
        hobies: Joi.string().regex(/^[ .a-zA-Z0-9]{6,16}$/).min(3).max(300).required(),
        cv: Joi.string().min(3).max(100).required()
    }),

}