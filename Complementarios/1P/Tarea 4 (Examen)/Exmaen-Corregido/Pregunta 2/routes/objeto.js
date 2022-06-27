const express = require('express');
const route = express.Router();

route.get("/objeto1",(req,res)=>{
    res.status(200).send({
        message: `La ruta ${req.url} existe y tiene datos:`,
        data:"Se guardó correctamente"
    })
})
route.get("/objeto2", (req, res) => {
    res.status(200).send({
        message: `La ruta ${req.url} existe y tiene datos:`,
        data: "Se guardó correctamente"
    })
})
// route.use((req,res,next)=>{
//     res.status(400).send({
//         message:"no existe la ruta"
//     })
// })
module.exports = route