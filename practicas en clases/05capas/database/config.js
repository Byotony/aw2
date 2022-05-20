const mongoose = require ('mongoose');

const dbConnection = async ()=>{

    try {

        console.log('Base de datos conectada...');
        await mongoose.connect( process.env.MONGODB_CNN);
        
    } catch (error) {
        console.log('No se pudo conectar a la base de datos.');
        throw new Error('Error al conectarse a la base de datos.');
    }

}

module.exports ={

    dbConnection
}