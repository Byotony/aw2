import {config} from 'dotenv'
config()

import {Server} from './server'

const server = new Server();

server.listen();










// import express, {Request, Response} from 'express'

// const app = express();
// const PORT = 3000;

// app.get('/',(req: Request,res: Response ) =>{
    
//     res.json({
//         msg:'ok'
//     })
// })


// app.listen(PORT, ()=>{
//     console.log('Prueba funcionando');
    
// })

// console.log("ok");
