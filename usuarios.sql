CREATE DATABASE red_sociall
GO

USE red_sociall
GO

CREATE TABLE usuarios(
	id_usuarios INT NOT NULL IDENTITY (1,1),
	nombres VARCHAR (50) NOT NULL,
	apellidos VARCHAR (50) NOT NULL,
	usuario VARCHAR (50) NOT NULL,
	email VARCHAR (50) NOT NULL,
	pass VARCHAR (20) NOT NULL,
	imagen VARCHAR (200) NULL,
	ciudad VARCHAR (100) NOT NULL,
	pais VARCHAR (100) NOT NULL,
	edad INT NOT NULL,
	estudios VARCHAR (100) NOT NULL,
	linkedin VARCHAR (300) NOT NULL,
	hobies VARCHAR (300) NOT NULL,
	cv VARCHAR (100) NULL,
	PRIMARY KEY (id_usuarios)
)
GO

----- TABLAS INFORMACION TECLER -----
CREATE TABLE conocimientos(
	id_conocimientos INT NOT NULL IDENTITY (1,1),
	bd INT NOT NULL,
	apis INT NOT NULL,
	testing INT NOT NULL,
	seguridad INT NOT NULL,
	teoriaObj INT NOT NULL,
	PRIMARY KEY (id_conocimientos)
)
--TABLAS INTERMEDIA usuarios - conocimientos
CREATE TABLE user_conocimientos (
	id_usuarios1 INT NOT NULL,
	id_conocimientos1 INT NOT NULL,
	FOREIGN KEY (id_usuarios1) REFERENCES usuarios (id_usuarios),
	FOREIGN KEY (id_conocimientos1) REFERENCES conocimientos (id_conocimientos)
)
GO

--SELECT * FROM usuarios
--SELECT * FROM conocimientos
--SELECT * FROM user_conocimientos
--GO

--SELECT * --nombres, apellidos, id_usuarios, c.id_conocimientos, c.apis
--FROM usuarios u
--LEFT JOIN conocimientos c 
--on u.id_usuarios=c.id_conocimientos
--GO


CREATE TABLE tecnologias(
	id_tecnologias INT NOT NULL IDENTITY (1,1),
	nodeJs INT NOT NULL,
	frontend INT NOT NULL,
	swagger INT NOT NULL,
	js INT NOT NULL,
	PRIMARY KEY (id_tecnologias)
)
--TABLAS INTERMEDIAS usuarios - tecnologias
CREATE TABLE user_tecno (
	id_usuarios2 INT NOT NULL,
	id_tecnologias2 INT NOT NULL,
	FOREIGN KEY (id_usuarios2) REFERENCES usuarios (id_usuarios),
	FOREIGN KEY (id_tecnologias2) REFERENCES tecnologias (id_tecnologias)
)
GO

CREATE TABLE desempenos(
	id_desempenos INT NOT NULL IDENTITY (1,1),
	calidadCod INT NOT NULL,
	velEntrega INT NOT NULL,
	performanceCod INT NOT NULL,
	PRIMARY KEY (id_desempenos)
)
--TABLAS INTERMEDIAS usuarios - desempenos
CREATE TABLE user_desem (
	id_usuarios3 INT NOT NULL,
	id_desempenos3 INT NOT NULL,
	FOREIGN KEY (id_usuarios3) REFERENCES usuarios (id_usuarios),
	FOREIGN KEY (id_desempenos3) REFERENCES desempenos (id_desempenos)
)
GO

CREATE TABLE blandas(
	id_blandas INT NOT NULL IDENTITY (1,1),
	enfocado INT NOT NULL,
	trabajoEq INT NOT NULL,
	comprometido INT NOT NULL,
	comunicacion INT NOT NULL,
	aprendizaje INT NOT NULL,
	resProblem INT NOT NULL,
	PRIMARY KEY (id_blandas)
)
--TABLAS INTERMEDIAS usuarios - blandas
CREATE TABLE user_blandas (
	id_usuarios4 INT NOT NULL,
	id_blandas4 INT NOT NULL,
	FOREIGN KEY (id_usuarios4) REFERENCES usuarios (id_usuarios),
	FOREIGN KEY (id_blandas4) REFERENCES blandas (id_blandas)
)
GO

CREATE TABLE entornos(
	id_entornos INT NOT NULL IDENTITY (1,1),
	github INT NOT NULL,
	trello INT NOT NULL,
	slack INT NOT NULL,
	agiles INT NOT NULL,
	PRIMARY KEY (id_entornos)
)
--TABLAS INTERMEDIAS usuarios - entornos
CREATE TABLE user_entor (
	id_usuarios5 INT NOT NULL,
	id_entornos5 INT NOT NULL,
	FOREIGN KEY (id_usuarios5) REFERENCES usuarios (id_usuarios),
	FOREIGN KEY (id_entornos5) REFERENCES entornos (id_entornos)
)
GO

CREATE TABLE extras(
	id_extras INT NOT NULL IDENTITY (1,1),
	conExtra INT NOT NULL,
	PRIMARY KEY (id_extras)
)
--TABLAS INTERMEDIAS usuarios - extras
CREATE TABLE user_extra (
	id_usuarios6 INT NOT NULL,
	id_extras6 INT NOT NULL,
	FOREIGN KEY (id_usuarios6) REFERENCES usuarios (id_usuarios),
	FOREIGN KEY (id_extras6) REFERENCES extras (id_extras)
)
GO

CREATE TABLE idiomas(
	id_idiomas INT NOT NULL IDENTITY (1,1),
	idiomas VARCHAR(30) NOT NULL,
	PRIMARY KEY (id_idiomas)
)
--TABLAS INTERMEDIAS usuarios - idiomas
CREATE TABLE user_idiomas (
	id_usuarios7 INT NOT NULL,
	id_idiomas7 INT NOT NULL,
	FOREIGN KEY (id_usuarios7) REFERENCES usuarios (id_usuarios),
	FOREIGN KEY (id_idiomas7) REFERENCES idiomas (id_idiomas)
)
GO

------ TABLAS ACCIONES -------------
CREATE TABLE amigos(
	id_amigos INT NOT NULL IDENTITY (1,1),
	amigo_emisor INT NOT NULL,
	amigo_receptor INT NOT NULL,
	PRIMARY KEY (id_amigos)
)
--TABLAS INTERMEDIA: usuarios - amigos
CREATE TABLE user_amigos (
	id_usuarios1 INT NOT NULL,
	id_amigos1 INT NOT NULL,
	FOREIGN KEY (id_usuarios1) REFERENCES usuarios (id_usuarios),
	FOREIGN KEY (id_amigos1) REFERENCES amigos (id_amigos),
)
GO

CREATE TABLE comentarios(
	id_comentarios INT NOT NULL IDENTITY (1,1),
	comentario VARCHAR(300) NOT NULL,
	com_emisor INT NOT NULL,
	com_receptor INT NOT NULL,
	com_estatus INT NOT NULL,
	PRIMARY KEY (id_comentarios)
)
--TABLAS INTERMEDIA: usuarios - comentarios
CREATE TABLE user_comentarios (
	id_usuarios2 INT NOT NULL,
	id_comentarios2 INT NOT NULL,
	FOREIGN KEY (id_usuarios2) REFERENCES usuarios (id_usuarios),
	FOREIGN KEY (id_comentarios2) REFERENCES comentarios (id_comentarios),
)
GO

CREATE TABLE solicitud(
	id_solicutd INT NOT NULL IDENTITY (1,1),
	sol_emisor INT NOT NULL,
	sol_receptor INT NOT NULL,
	sol_estatus INT NOT NULL,
	PRIMARY KEY (id_solicutd)
)
--TABLAS INTERMEDIA: usuarios - solicitud
CREATE TABLE user_solicitud (
	id_usuarios3 INT NOT NULL,
	id_solicutd3 INT NOT NULL,
	FOREIGN KEY (id_usuarios3) REFERENCES usuarios (id_usuarios),
	FOREIGN KEY (id_solicutd3) REFERENCES solicitud (id_solicutd),
)
GO

-----INSERTAR INFORMACION PARA EJEMPLOS -------
INSERT INTO usuarios (nombres,apellidos,usuario,email,pass,imagen,ciudad,pais,edad,estudios,linkedin,hobies,cv) 
VALUES ('Mario','Prez Mungia','mario1507','mario@gm','m123','pedro.png','Toluca','Mexico',26,'univeridad sw Toluca','https://www.linkedin.com/in/brandonbornancin/','leer','cv1')
INSERT INTO usuarios (nombres,apellidos,usuario,email,pass,imagen,ciudad,pais,edad,estudios,linkedin,hobies,cv) 
VALUES ('Pedro','Montes Villa','pedri11','pedro@gmail','p123','mario.png','Pereira','Colombia',20,'univeridad Colombia','https://www.linkedin.com/in/pedro/35b849b5/','ajedrez','hoja de vida')
INSERT INTO usuarios (nombres,apellidos,usuario,email,pass,imagen,ciudad,pais,edad,estudios,linkedin,hobies,cv) 
VALUES ('Janet','Garcia Perez','JanGP21','janet@gmail','j123','janet.png','Rosario','Argentina',30,'univeridad Argentina','https://www.linkedin.com/in/janet/35b849b5/','cantar','hoja de vida')
GO

--INSERT INTO conocimientos (bd, apis, testing, seguridad, teoriaObj)
--VALUES (1,2,3,4,5)

--INSERT INTO tecnologias (nodeJs, frontend, swagger, JS)
--VALUES (1,2,3,4)

--INSERT INTO desempenos (calidadCod, velEntrega, performanceCod)
--VALUES (1,2,3)

--INSERT INTO blandas (enfocado, trabajoEq, comprometido, comunicacion, aprendizaje, resProblem)
--VALUES (1,2,3,4,5,5)

--INSERT INTO entornos (github, trello, slack, agiles)
--VALUES (1,2,3,4)

--INSERT INTO extras (conExtra)
--VALUES (1)

--INSERT INTO idiomas (idiomas )
--VALUES ('ingles')
--GO

--INSERT INTO amigos (amigo_emisor,amigo_receptor)
--VALUES (1,2)
--INSERT INTO comentarios (comentario,com_emisor,com_receptor,com_estatus)
--VALUES ('bla bla bla',1,1,2)
--INSERT INTO solicitud (sol_emisor,sol_receptor,sol_estatus)
--VALUES (1,1,2)
--GO
----tablas intermedias:
--INSERT INTO user_conocimientos(id_usuarios1,id_conocimientos1)
--VALUES (1,1)
--GO

------- MOSTRAR TABLAS ------------
--SELECT * FROM usuarios
--SELECT * FROM conocimientos
--SELECT * FROM user_conocimientos
--SELECT * FROM tecnologias
--SELECT * FROM user_tecno
--SELECT * FROM desempenos
--SELECT * FROM user_desem
--SELECT * FROM blandas
--SELECT * FROM user_blandas
--SELECT * FROM entornos
--SELECT * FROM user_entor
--SELECT * FROM extras
--SELECT * FROM user_extra
--SELECT * FROM idiomas
--SELECT * FROM user_idiomas
--GO

SELECT * FROM usuarios
SELECT * FROM conocimientos
SELECT * FROM tecnologias
SELECT * FROM desempenos
SELECT * FROM blandas
SELECT * FROM entornos
SELECT * FROM extras
SELECT * FROM idiomas
GO