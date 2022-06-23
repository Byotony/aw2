const server= require('./src/app');

server.listen(process.env.PORT || 3000, () => {
    console.log (`Microservicio de usuario corriendo en el puerto ${process.env.PORT}`);
})