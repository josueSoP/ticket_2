const Usuarios = require('../models/model.usuarios');
const bcrypt = require('bcrypt-nodejs')
const jwt = require('../../services/services.usuarios')

/////////Funcion para registro de usuario ///////
async function guardarUsuario (req,res){
    let data = req.body;
    try{
        //si ingreso todos los dato
        if(data.nombres && data.apellidos && data.usuario && data.email && data.pass && data.imagen){ 
            let resultado = await Usuarios.findOne({where:{usuario: data.usuario}})
            if (resultado != null){
                res.status(400).send({message: 'Error el usuario ya existe'})
                return false; 
            }else {            
                await Usuarios.create(({
                    nombres: data.nombres, 
                    apellidos: data.apellidos, 
                    email: data.email, 
                    usuario: data.usuario, 
                    pass: data.pass,
                    // rol: data.rol, 
                    imagen: data.imagen}))
                data.pass = undefined; //para que no se muestre la contraseña la hacer el SEND
                res.status(200).send({message: 'usuario agregado correctamente',data});
                return true;
            }
        }else{
            res.status(400).send({message:'Envia todos los datos necesarios'})
        }
    }catch (err){
        console.log(err)
        throw new Error (err)
    }
}

/////////Funcion para loguin de usuario ///////
async function loginUsuario (req,res){
    let users = req.body;
    try{
        let resultado = await Usuarios.findOne({where: {usuario:users.usuario, pass: users.pass}})
        if (resultado === null){
            res.status(400).send({message: 'usuario o contraseña incorrecta'});
            return false
        }else {
                //generar y devlver toke
                let tokenResult = await jwt.generaToken(users)
                users.pass = undefined; //para que no se muestre la contraseña la hacer el SEND
                res.status(200).send({message: 'usuario y contraseña valido',users,tokenResult});
                return true
        }
    }catch (err){
        console.log(err)
        throw new Error (err)
    }
}

/////////Funcion para conseguir datos de un usuario ///////
async function burcarUsuario (req,res){
    let userId = req.params.id;
    try{
        let resultado = await Usuarios.findAll({where: { id : userId } })
        res.status(200).send({message: 'usuario:',resultado});
        // return resultado[0]
    }catch (err) {
        res.status(400).send({message: 'el usuario no existe'});
    }
}

/////////Funcion para editar datos de un usuario ///////
async function editarUsuario (req,res){
    let userId = req.params.id;
    let data = req.body;
    // try {
        // //comporbamos que el que desea modificar es ese usuario y no otro
        if(userId != req.user.sub){//como comparar el id con el del token
            return res.status(400).send({message: 'no tienes permisos para modificar este usuario'});
        }//else{
            try {
                let resultado = await Usuarios.update({nombres: data.nombres, apellidos: data.apellidos, email: data.email, usuario: data.usuario, pass: data.pass, imagen: data.imagen}, {where: { id : data.id}})
                return res.status(200).send({message: 'actualizado:',resultado});
            }catch (err){
                throw new Error ('No se pudo actualizar el usuario seleccionado')
            }
    //     }
    // }catch (err) {
    //     throw new Error ('Ocurrio un problema en el controlador al BUSCAR usuario')
    // }
    //borramos la propiedad pass para hacerlo por separado
    // delete update.pass
    
}

/////////Funcion para editar datos de un usuario ///////
async function subirImagen (req,res){
    let userId = req.params.id;

    if(userId != req.Usuarios.id){
        return res.status(400).send({message: 'no tienes permisos para modificar este usuario'});
    }
    //enviar files 
    if(req.files){
        let file_path = req.files.image.path;
        console.log(file_path);

        let file_split = file_path.split('\\');
        // console.log(file_split);
    }
        // let file_name = file_split[2];
        // console.log(file_name);

        // let ext_split = file_name.split('\.');
        // console.log(ext_split);

        // let file_ext = ext_split[1];
        // console.log(file_ext);

        // if(file_ext == 'png' || file_ext == 'jpg' || file_ext == 'gif'){
        //     //actualizar el documento de usuario logueado
        // }else{
        //     file_split.unlink(file_path, (err)=>{
        //         return res.status(200).send({message: 'Extension no valida'});
        //     });
        // }
    // }else{
    //     return res.status(200).send({message: 'no se han subido imagenes'});
    // }
}


module.exports = {
    guardarUsuario,
    loginUsuario,
    burcarUsuario,
    editarUsuario,
    subirImagen
}


// module.exports.generaToken = async (data)=>{
//     try {
//         let resultado = jwt.sign({
//             exp: Math.floor(Date.now() / 1000) + (60 * 60),
//             data
//         }, process.env.SECRET_KEY
//         )
//         return resultado
//     }catch (err){
//         console.log(err)
//         throw new Error (err)
//     }
// }

// //modulo para la Lista de Usuarios Registrados //////////
// module.exports.listarRegistros = async ()=>{
//     try {
//         let resultado = await Usuarios.listar()
//         return resultado
        
//     }catch (err){
//         console.log('Error de modelos' + err)
//         throw new Error ('Ocurrio un problema en el controlador listar usuarios')
//     }
// } 



// ////////////MODULOS PARA MODIFICAR USUARIO//////////////
// //Seleccionar un solo registro por su ID para poderlo modificar
// module.exports.buscarRegistro = async (data)=>{
//     try {
//         let resultado = await Usuarios.buscarUsuarios(data)
//         return resultado
//     }catch (err) {
//         throw new Error ('Ocurrio un problema en el controlador al BUSCAR usuario')
//     }
// }

// //guardar modificacion
// module.exports.modificarUsuario = async (data) => {
//     try {
//         await Usuarios.update({nombres: data.nombres, apellidos: data.apellidos, email: data.email, usuario: data.usuario, pass: data.pass}, {where: { id : data.id}})
//         return true;
//     }catch (err){
//         throw new Error ('No se pudo actualizar el producto seleccionado')
//     }
// }

 ///////////MODULO PARA ELIMINAR UN REGISTRO ////////////
// module.exports.eliminarRegistro = async (data) => {
//     try {
//         await Usuarios.destroy({
//             where: { id : data}
//         })
//         return true;
//     }catch (err){
//         throw new Error ('No se pudo eliminar el usuario seleccionado')
//     }
// };
