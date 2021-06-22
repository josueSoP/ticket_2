const controllerPublica = require('../controllers/controller.publicaciones');
// const midd = require('../../middleware/midd.usuarios');


module.exports = async (app)=> {
    app.get('/pruebaP', controllerSeguidores.pruebaP)
    app.get('/prueba', midd.verificacionUsuario, async (req, res)=> {
        res.json('ok')
    })
}