const controllerSeguidores = require('../controllers/controller.seguidores');
const midd = require('../../middleware/midd.verificacion');

module.exports = async (app)=> {
    app.get('/pruebas', midd.verificacionUsuario, controllerSeguidores.prueba)
    app.get('/prueba', midd.verificacionUsuario, async (req, res)=> {
        res.json('ok')
    })
    app.post('/followe',  async (req,res)=>{
        try{
            return res.status(200).send({follow: followGuardado});
            // res.render('login/registro.ejs')
        }catch (err){
            console.log(err)
            res.status(400).json('Error al dirigirse a la pagina follow')
        }
    })

    app.post('/follow',midd.verificacionUsuario,controllerSeguidores.saveFollow);
    app.delete('/follow/:id',midd.verificacionUsuario,controllerSeguidores.deleteFollow);
    app.get('/following/:id/page?',midd.verificacionUsuario,controllerSeguidores.getFollowingUsers);
    app.get('/followed/:id/page?',midd.verificacionUsuario,controllerSeguidores.getFollowedUsers);
    app.get('/misFollows/:followed?',midd.verificacionUsuario,controllerSeguidores.getMyFollows);
}
