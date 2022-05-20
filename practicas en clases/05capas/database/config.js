// SE DECLARA LA CONSTANTE PARA PODER CREAR LA CONEXION A LA BASE DE DATOS.

const mongoose = require ('mongoose');

// SE CREAN LA VARIABLE PARA LA CONEXIÓN A LA DB.

const dbConnection = async ()=>{

    try { // EL TRY SE ENVIARÁ CUANDO TODO ESTÉ CORRECTO Y TENGAMOS CONEXIÓN A LA DB.

        console.log('Base de datos conectada...');
        await mongoose.connect( process.env.MONGODB_CNN);
        
    } catch (error) { // EN CASO DE TENER ALGO MAL, NOS SALTARÁ ESTE ERROR EL CUAL NOS NOTIFICARÁ DE QUE NO ESTAMOS CONECTADOS A LA DB.
        console.log('No se pudo conectar a la base de datos.');
        throw new Error('Error al conectarse a la base de datos.');
    }

}

// SE EXPORTAN LOS MODULOS CREADOS.

module.exports ={

    dbConnection
}