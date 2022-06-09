import {connect} from 'mongoose'

const dbConnection = async () => {

    try {
        
        connect(process.env["MONGODB_CNN"] || "")
        console.log("Base da datos conectada");
        
    
    } catch (error) {
    
        console.log(error)
        throw new Error("error al conectar con la base de datos")

    }

}

export {dbConnection}