const express = require ('express');
const app = express();

const respuesta = {
    data:[],
    arquitectura:'monolíticas',
    descripcion:'Este es un microservicio que se encarga de devolver una lista de usuarios'
}

app.use ((req, res, next) => {
    respuesta.data =[]
    next();
})

app.get('/api/v1/cliente', (req, res) => {
    
    respuesta.data.push("Consumidor Final", "Antony Palacios", "Axel el cuarteado")
    return res.send (respuesta);

})

app.get('/api/v1/producto', (req, res) => {
    
    respuesta.data.push("Agua con confle", "Wisky con Pan", "Viagra con Yerba")
    return res.send (respuesta);

})

app.get('/api/v1/usuario', (req, res) => {
    
    respuesta.data.push("Administrador", "Superadministrador", "Usuario")
    return res.send (respuesta);

})

module.exports = app;