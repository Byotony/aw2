// SE GENERA UNA CONSTANTE PARA PODER DESESTRUCTURARLA, LA CUAL NOS SERVIRÁ PARA VALIDAR LOS DATOS.

const { validationResult} = require ('express-validator');

const validarCampos = (req, res, next )=>{

    const errors = validationResult (req)
    if (!errors.isEmpty()) {
        res.status(400).json(errors);
    }

    next();
}

// SE EXPORTAN LOS MÓDULOS.

module.exports = {
    validarCampos,
} 