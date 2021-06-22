# Ticket 1 

<em>
- Soto Plaza Josué Felipe
</em>

### Pasos Para Correr el Proyecto
1. Clonar Repositorio

2. Instalar Dependencias
    - `npm install`

3. Editasr archivo .env en las siguientes variables
```
DB_USER = ''
DB_PASS = ''
```

4. Crear una Base de Datos en SQL Server:
    - `correr documento SQL para generar DB`
   
5. Iniciar Servidor Local
    - `npm run dev` 

6. CRUD de Informacion del usuario:
    -`falta hacer la conexion entre la tabla usuarios (id_usuarios) con las tablas de informacion (ej: conocimiento_id), ya genere la conexion entre tablas desde el SQL, se puede generar el esquema para verlo`
    -`tambien falta solucionar la carga de imagen`
    -`Desde el front no se puede editar un usuario pero en el back si`
    -`cuando agrego la autorizacion en el back, al agregar el token desde postman si me deja, cuando ingreso desde el front, reconoce y gener el token pero no me guarda el token en el local storage para seguir navegando, pero en el back si funciona bien`

    -`se puede hacer el login y gegistro de usuario, eliminar usuario si al dar en editar, modificar usuario (desde el back), ver comunidad de teclers, ver un usuario, guardar informacion de los campos que sabe un usuario`

7. Login del Usuario
    - http://localhost:3000/login
