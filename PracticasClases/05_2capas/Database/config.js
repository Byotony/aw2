const mongoose=require('mongoose');
const DBConnection=async()=>{
    try {
        console.log("Conexion Exitosa");
        await mongoose.connect(process.env.MONGODB_CNN);
    } catch (error) {
        console.log(`No se pudo conectar a la base de datos`);
        throw new Error(`ERROR No se pudo conectar a la base de datos`)
    }
}
module.exports={
DBConnection
}