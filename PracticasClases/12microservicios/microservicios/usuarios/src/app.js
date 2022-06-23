const express = require('express');
const app = express();

const respuesta = {
    data:[],
    arquitectura: 'microservicios',
    descripcion: 'Usuarios de microservicios',
}

app.get ('/api/v2/usuario', (req, res) => {
    
    respuesta.data=[]
    respuesta.data.push('Usuario 1', 'Usuario 2', 'Usuario 3')
    console.log('Microservicio Usuario');
    return res.send (respuesta);

})

module.exports = app;