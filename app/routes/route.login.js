const controladorUsuarios = require('../controllers/controller.usuarios')
const midd = require('../../middleware/midd.verificacion');

module.exports = async (app)=> {
    //////////// LOGIN DE USUARIOS /////////////////////////
    app.get('/login', async (req,res)=>{
        try{
            res.render('login/login.ejs');
        }catch (err){
            res.estatus(400).json('No se puede mostrar')
        }
    })

    app.post('/login', async (req,res)=>{
        let usuario = req.body
        try {
            let resultado = await controladorUsuarios.chequearUsuario(usuario)
            if (resultado){
                let usuarioInfo = await controladorUsuarios.datosUsuario(usuario)
                let tokenResult = await controladorUsuarios.generaToken(usuario)
                // res.status(200).send({tokenResult, message: 'usuario y contraseña valido',usuarioInfo});
                res.json({ token: tokenResult, user: usuarioInfo })
            }else {
                throw new Error ("Contraseña Incorrecta")
            }
        }catch (err){
            res.status(400).json({ error: err.message})
        }
    })

}
