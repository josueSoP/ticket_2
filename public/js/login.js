let form = document.getElementById('formLogin');
let user = document.getElementById('usuario');
let pass = document.getElementById('pass');

class Usuarios {
    constructor(){
        this.id = "",
        this.nombre = "",
        this.user = "",
        this.email = "",
        this.token = ""
    }

    static async guardaUsuario (usuario) {
        localStorage.setItem("dataUsuario", JSON.stringify(usuario))
    }

    static async recuperaUsuario () {
        let resultado = await JSON.parse(localStorage.getItem('dataUsuario'))
        return resultado
    }
}

//Manda el post
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    Usuarios.guardaUsuario(new Usuarios());
    let resultado = await fetch("http://localhost:3000/login", { 
        method: 'post',
        headers: {
            "Accept": "application/json, text/plain, *,*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify( {
            "usuario": user.value,
            "pass": pass.value
        })
    })
    let recupera = await resultado.json();
    if(recupera.error){
        swal({
            title: `${recupera.error}`,
            icon: "error",
          });
    } else {
        let data = await Usuarios.recuperaUsuario();
        data.user = recupera.user.usuario;
        data.id = recupera.user.id_usuarios;
        data.email = recupera.user.email;
        data.nombre = recupera.user.nombres + " " + recupera.user.apellidos;
        data.token = recupera.token;
        Usuarios.guardaUsuario(data);
            location.href = '/usuarios'
    }
})