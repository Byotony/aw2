const server= require('./src/app');

server.listen(process.env.PORT || 3000, () => {
    console.log (`Microservicios de Clientes corriendo en el puerto ${process.env.PORT}`);
})