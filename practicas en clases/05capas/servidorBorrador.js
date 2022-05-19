const express = require ('express');
const cors = require ('cors');
const { dbConnection } = require('./database/config');

class Server {
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
        this.routers.use('/v1/SextoA', this.app);
        this._express = express().use(this.router)
        
    }
    async conectarDB(){
        dbConnection
    };
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    };
    routers(){
        this.app.use(this.paths.productos, require ('./routers/producto'))
    };
    listen(){
        this._express.listen(this.port, ()=>{
            console.log (`Servidor corriendo en puerto ${this.port}`);
        })
    };
}



