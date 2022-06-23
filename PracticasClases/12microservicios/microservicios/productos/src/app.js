const express = require('express');
const app = express();

const respuesta = {
    data:[],
    arquitectura: 'microservicios',
    descripcion: 'Productos de microservicios',
}

app.get ('/api/v2/producto', (req, res) => {
    
    respuesta.data=[]
    respuesta.data.push('Producto 1', 'Producto 2', 'Producto 3')
    console.log('Microservicio Producto');
    return res.send (respuesta);

})

module.exports = app;