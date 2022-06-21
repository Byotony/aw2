const express=require ('express');
const cors=require('cors');
const { DBConnection } = require('./Database/config');
class server{
    constructor(){
        this.app=express.Router();
        this.router = express.Router();
        this.port=process.env.PORT;
        this.paths={
            productos:'/api/productos',
            //añadir mas si se necesitan
        }
        this.ConectarDB();
        this.middlewares();
        this.routes();
        this.router.use('/v1/sextoa',this.app);
        this._express=express().use(this.router);
    }
    async ConectarDB(){
        await DBConnection();
    }
    middlewares(){  
        this.app.use(cors());
        this.app.use(express.json());
    }
    routes(){
        this.app.use(this.paths.productos, require ('./routes/Productos'));
    }
    listen(){
        this._express.listen(this.port,()=>{
            console.log(`Servidor corriendo en puerto ${this.port}`);
        })
    }
}
module.exports=server;