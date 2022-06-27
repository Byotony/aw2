const express = require('express');
const route = require('./routes/objeto')//
const app = express();

const puerto = 3000;
app.listen(puerto, () => {
    console.log('Servidor COrriendo');
});

app.use(express.json());
app.use('/api/v1', route)
app.use((req, res, next) => {
    res.status(400).send({
        message: "La ruta no existe"
    })
})

