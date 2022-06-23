const express = require('express');
const app = express();

const respuesta = {
    data:[],
    arquitectura: 'microservicios',
    descripcion: 'Cliente de microservicios',
}

app.get ('/api/v2/cliente', (req, res) => {
    
    respuesta.data=[]
    respuesta.data.push('Cliente 1', 'Cliente 2', 'Cliente 3')
    console.log('Microservicio cliente');
    return res.send (respuesta);

})

module.exports = app;