# Indicaciones para ejecutar el programa.
## Nombre: Antony Palacios Bello
## Curso: 6to "A"

- PASO 1) Crear en la carpeta main un archivo con el nombre `.env` con la siguiente información:

> variable del puerto en el cual se está ejecutando
* PORT=
> Link de la base de datos
* MONGODB_CNN=

- PASO 2) Abrir una terminal `shift + ñ` y teclear los siguientes comandos.

> Se instalará todo lo del package
* npm i

> Instalamos TS
* npm i -g typescript

> Inicializamos el TS
* tsc --init

> Ejectutamos el TS para convertir los archivos TS a JS
* tsc

> Adicción del nginx
- PASO 3) Se añade el siguiente archivo `nginx.conf` la cual servirá para unificar las rutas

> Ejecutamos el programa con Docker.
- PASO 4) Se carga el y se runnea con el docker 

> Construimos el docker
* docker-compose build

> Subimos y ejecutamos el docker.
* docker-compose up
