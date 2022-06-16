import express,{Router}from 'express'
import { dbConnection } from './database/config';
import cors from 'cors';
import {router as productos} from './routes/productos';
class Server{
    app:Router
    router:Router
    port:Number
    paths:{[key:string]:string};
    private _express:express.Express;
    constructor(){
        this.app=Router();
        this.router =Router();
        this.port=Number(process.env["PORT"])
        this.paths = {
            productos: '/api/productos',
            //añadir más si se necesitan
        }
        this.conectarDB()
        this.middlewares()
        this.routes()
        this.router.use('/v1/sextoa', this.app);
        this._express = express().use(this.router);
    }
    private async conectarDB() {//modificadores de acceso son los private
        await dbConnection();
    } 
    private middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
    }
    private routes(){
        this.app.use(this.paths.productos, productos);
        this.app.use((req, res, next) => {
            res.status(400).send({
                message: "La ruta no existe"
            })
        })
    }
    listen(){
        this._express.listen(this.port, () => {
            console.log(`Servidor ejecutando en http://localhost:${this.port}/v1/sextoa/api/productos`);
        })
    }
}
export {Server}


// class Server{




//     constructor(){}
//     private async conectarDB(){}
//     private middlewares(){}
//     private routes(){}
//     listen(){}

// }

// export {Server}