# Indicaciones para ejecutar el programa.
## Nombre: Antony Palacios Bello
## Curso: 6to "A"

- Paso 1) Crear en la carpeta main un archivo con el nombre `.env` con la siguiente información:

> variable del puerto en el cual se está ejecutando
1. PORT=
> Link de la base de datos
2. MONGODB_CNN=

- Paso 2) Abrir una terminal `shift + ñ` y teclear los siguientes comandos.

> se instalará todo lo del package
1. npm i

> instalamos TS
2. npm i -g typescript

> inicializamos el TS
3. tsc --init

> Ejectutamos el TS para convertir los archivos TS a JS
4. tsc

> Ejecutamos el programa
5. node dist/index.js

> Construimos el docker
6. docker-compose build

> Subimos y ejecutamos el docker.
7. docker-compose up