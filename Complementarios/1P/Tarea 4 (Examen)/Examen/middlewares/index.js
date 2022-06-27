const {check} = require('express-validator');
const expressv = require('./validacion-result');

const validacion = [
    check("nombre")
    .exists()
    .not().withMessage('El campo "nombre" es requerido')
    .notEmpty().withMessage('El campo está vacío.')
    .matches(/^[A-Z][A-z\s]+$/).withMessage('La primera debe ser MAYÚSCULA obligatoriamente.'),


    (req, res, next)=>{
        expressv(req, res, next);
    }
]

module.exports = validacion;