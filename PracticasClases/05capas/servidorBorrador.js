const express = require ('express');
const cors = require ('cors');
const { dbConnection } = require('./database/config'); // SE IMPORTA LA CONF DE LA BASE DE DATOS.

class Server { // SE GENERA UNA CLASE CON LAS RUTAS.
    constructor(){
        this.app = express.Router();
        this.router = express.Router();
        this.port = process.env.PORT;
        this.paths = {
            productos: '/api/productos',
            clientes: '/api/clientes',
        }
        this.conectarDB(); 
        this.middlewares();
        this.routers();
        this.router.use('/v1/SextoA', this.app);
        this.app.use((req, res, next) => {
            res.status(400).send({
                message: "La ruta no existe"
            })
        })
        this._express = express().use(this.router);
        
    }
    async conectarDB(){ // MÉTODO PARA CONECTARSE A LA BASE DE DATOS.
        await dbConnection();
    };
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    };
    routers(){
        this.app.use(this.paths.productos, require ('./routers/producto'))
        // this.app.use(this.paths.clientes, require ('./routers/cliente'))
    };
    listen(){
        this._express.listen(this.port, ()=>{
            console.log (`Servidor corriendo en puerto ${this.port}`); // SERVIDOR CORRIENDO UN PUERTO ESPECÍFICO.
        })
    };
}

// SE EXPORTAN LOS MÓDULOS.

module.exports = Server;




