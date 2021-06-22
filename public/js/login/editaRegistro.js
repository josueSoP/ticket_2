let form = document.getElementById('nuevoForm');
let nombres = document.getElementById('nombres');
let apellidos = document.getElementById('apellidos');
let email = document.getElementById('email');
let usuario = document.getElementById('usuario');
let pass = document.getElementById('pass');
let idData = document.getElementById('idUsuario')

//Manda el post
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    let data = await JSON.parse(localStorage.getItem('dataUsuario'))
    try {
        let resultado = await fetch("http://localhost:3000/update", { 
        method: 'post',
        headers: {
            "Accept": "application/json, text/plain, *,*",
            "Content-Type": "application/json",
            'Authorization': `Bearer ${data.token}`
        },
        body: JSON.stringify( {
            "id": parseInt(idData.textContent),
            "nombres": nombres.value,
            "apellidos": apellidos.value,
            "email": email.value,
            "usuario": usuario.value,
            "pass": pass.value,
        })
    })

    if(resultado.status == 400){
        swal({
            title: "ERROR AL MODIFICAR",
            text: "No se pudo modificar el Usuario, intente mas tarde",
            icon: "error",
          });
    } else {
        swal({
            title: "Usuario Actualizado Correctamente",
            icon: "success",
          });
          setTimeout(() => {
            location.href = '/usuarios'
        }, 3000);
    }
} catch (error) {
    swal({
        title: "No tienes permiso para modificar",
        icon: "error",
      });
}

})

function newFormulario()
{
    nombres.value = ""
    apellidos.value = ""
    email.value = ""
    usuario.value = ""
    pass.value = ""
}