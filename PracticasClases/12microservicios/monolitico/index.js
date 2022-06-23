const servidor = require ('./src/app');

servidor.listen (process.env.PORT || 3000, () => {
    console.log (`Servidor corriendo en el puerto ${process.env.PORT}`);
})

