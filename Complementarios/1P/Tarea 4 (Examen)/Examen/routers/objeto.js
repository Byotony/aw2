const { json } = require('express');
const express = require('express');
const objeto = require('../middlewares/index');
const abc = require('../repositorio/user');
const route = express.Router()
let gus = []


route.get("/objetoget", objeto, (req, res)=>{

    const datos = req.body;
    abc(datos, gus)
    res.status(200).send(datos)
    message: 'Ruta /objetoget existe y presenta el siguiente mensaje'
})

route.get("/", objeto, (req, res)=>{

    res.status(400).send('"mesagge": No existe la ruta')
    message: 'la ruta no existe'
})

module.exports = route;