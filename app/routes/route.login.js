const controllerLogin = require('../controllers/controller.login')
const midd = require('../../middleware/midd.verificacion');

module.exports = async (app)=> {
    //////////// LOGIN DE USUARIOS /////////////////////////
    app.get('/login', async (req,res)=>{
        try{
            res.render('login.ejs');
        }catch (err){
            res.estatus(400).json('No se puede mostrar login GET')
        }
    })

    app.post('/login', midd.validarLogin, async (req, res) => {
        let usuario = req.body
        try { 
            let resultado = await controllerLogin.chequearUsuario(usuario)
            if (resultado) {
                let usuarioInfo = await controllerLogin.datosUsuario(usuario)
                let tokenResult = await controllerLogin.generaToken(usuario)
                // res.status(200).send({tokenResult, message: 'usuario y contraseña valido',usuarioInfo});
                res.json({ token: tokenResult, user: usuarioInfo })
            } else {
                throw new Error ("Usuario o Contraseña Incorrecta")
            }
        } catch (err) {
            console.log(err)
            res.status(400).json({ error: err.message})
        }
    })

}
