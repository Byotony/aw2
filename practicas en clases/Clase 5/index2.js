const express=require('express');
const cors=require('cors');
const app=express();
const puerto=2500;
app.use(cors()).use(express.json());
app.get('/prueba',(req,res,next)=>{
next ();
}, (req, res, next) => {
    res.status(200).send({ "mensaje": "hola prueba"});
});
app.use('/prueba',(req,res,next)=>{
    req.body.nombre=req.body.nombre.toUpperCase();//validaciones o autentificaciones
    next();
})
app.post('/prueba',(req,res,next)=>{
    res.status(201).send(req.body);
    next();
})
app.use('/prueba', (req, res, next) => {
    console.log('Despues de Middleware');
    res.status(201).send(req.body);
})
app.listen(puerto,()=>{
    console.log(`Servidor Ejecutado en puerto: ${puerto}`);
});