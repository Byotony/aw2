const express = require('express');
const cors = require('cors');

const app = express();
const puerto = 2500;

app.use(cors()).use(express.json());

app.get('/prueba', (req,res,next)=>{
    //console.log('Servidor ejecutándose en puerto ',puerto)
    next();
}, (req,res,next)=>{
    res.status(200).send({ mensaje:"Hola mundo :)"});
})
app.use('/prueba', (req,res,next)=>{
    Req.body.nombre = req.body.nombre.toUpperCase();
    next();
})
app.post('/prueba',(req,res,next)=>{
    res.status(201).send(req.body);
})

app.use('/prueba', (req,res,next)=>{
    console.log('Después del Middleware');
})

app.listen(puerto, ()=>{
    console.log("Servidor ejecutandose en el puerto: ", puerto)
})