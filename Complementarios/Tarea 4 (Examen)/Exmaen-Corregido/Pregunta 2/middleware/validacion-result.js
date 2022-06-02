// // A LA FINAL NO SE NECESITARON

const {validationResult} = require('express-validator');
const resultado = (req, res, next)=>{
    try {
        
        validationResult(req).throw()
        return next();

    } catch (error) {
        
        console.log('No existe la ruta');
        res.status(400).send({error: error.array()})
        

    }
}

module.exports = resultado;