let form = document.getElementById('formPerfil');
let nombres = document.getElementById('nombres');
let apellidos = document.getElementById('apellidos');
let usuario = document.getElementById('usuario');
let email = document.getElementById('email');
let pass = document.getElementById('pass');
let imagen = document.getElementById('imagen');
let ciudad = document.getElementById('ciudad');
let pais = document.getElementById('pais');
let edad = document.getElementById('edad');
let estudios = document.getElementById('estudios');
let linkedin = document.getElementById('linkedin');
let hobies = document.getElementById('hobies');
let cv = document.getElementById('cv');
let idData = document.getElementById('idUsuario')

//Manda el post
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    let data = await JSON.parse(localStorage.getItem('dataUsuario'))
    try {
        let resultado = await fetch("http://localhost:3000/update" + id_usuarios, { 
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
            "imagen": imagen.value,
            "ciudad": ciudad.value,
            "pais": pais.value,
            "edad": edad.value,
            "estudios": estudios.value,
            "linkedin": linkedin.value,
            "hobies": hobies.value,
            "cv": cv.value,
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
            location.href = '/miPerfl'
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
    imagen.vale = ""
    ciudad.vale = ""
    pais.vale = ""
    edad.vale = ""
    estudios.vale = ""
    linkedin.vale = ""
    hobies.vale = ""
    cv.vale = ""
}