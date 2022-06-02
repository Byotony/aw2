// SE CREA UNA CONSTANTE PARA LUEGO EXPORTARLA CON TODAS LAS VALIDACIONES NECESARIAS PARA LA LOS PRODUCTOS.

const ValidarCampos = require ('../middlewares/validarCampos');

// SE EXPORTAN LOS MÓDULOS.

module.exports = {

    ...ValidarCampos

}