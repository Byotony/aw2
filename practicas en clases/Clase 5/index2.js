// SE DECLARAN LAS CONSTANTES CON LOS FRAMEWORKS A UTILIZAR

const express=require('express');
const cors=require('cors');

// SE DECLARA EL PUERTO QUE SE USARÁ Y LA LIBRERÍA EXPRESS.
const app=express();
const puerto=2500;
app.use(cors()).use(express.json());
app.get('/prueba',(req,res,next)=>{
next ();
}, (req, res, next) => {
    res.status(200).send({ "mensaje": "hola prueba"}); // EN CASO DE CUMPLISER SE MOSTARÁ EL MENSAJE
});
app.use('/prueba',(req,res,next)=>{
    req.body.nombre=req.body.nombre.toUpperCase(); // SE MANDARÁN TODAS LOS CARACTERES INGRESADOS EN MAYÚSCULAS 
    next();
})
app.post('/prueba',(req,res,next)=>{ //validaciones o autentificaciones
    res.status(201).send(req.body);
    next();
})
app.use('/prueba', (req, res, next) => {
    console.log('Despues de Middleware');
    res.status(201).send(req.body);
})
app.listen(puerto,()=>{
    console.log(`Servidor Ejecutado en puerto: ${puerto}`); // SE MUERTA EL MENSAJE POR EL CUAL SE ESTÁ ALOJANDO LA PAGG DE MANERA LOCAL
});