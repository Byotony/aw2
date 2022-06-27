import express,{Router}from 'express'
import { dbConnection } from './database/config';
import cors from 'cors';
import {router as user} from './routes/user';
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
            user: '/api/users',
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
        this.app.use(this.paths.user, user);
        this.app.use((req, res, next) => {
            res.status(400).send({
                message: "La ruta no existe"
            })
        })
    }
    listen(){
        this._express.listen(this.port, () => {
            console.log(`Servidor ejecutando en http://localhost:${this.port}/v1/sextoa/api/users`);
        })
    }
}
export {Server}