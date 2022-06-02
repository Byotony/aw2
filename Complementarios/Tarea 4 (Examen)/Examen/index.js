const express = require('express');
const app = express();

const PORT = 3000;

//! MIDDLEWARES

app.use(express.json());

app.use("/api/v1", require('./routers/objeto'));

app.listen(PORT);
console.log('Servidor corriendo');