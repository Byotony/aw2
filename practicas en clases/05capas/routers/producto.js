const {Router} = require('express');

const {check} = require('express-validator');


const {obtenerProductos,
       obtenerProducto,
       crearProductos,
       actualizarProductos,
       borrarProductos
} = require('../controllers').Producto;

const { validarCampos } = require ('../middlewares');

const router = Router ();

router.get('/' 
[check('nombre', 'El nombre es obligatorio').isEmpty()]
, obtenerProductos)


router.get('/:id'
[check('nombre', 'El nombre es obligatorio').isEmpty()]
, obtenerProducto)


router.post('/' , 
[check('nombre', 'El nombre es obligatorio').not().isEmpty(),validarCampos]
, crearProductos)


router.put('/:id' ,
[check('id','El id no es válido').isMongoId(),validarCampos]
,actualizarProductos)


router.delete('/' 
[check('id','El id no es válido').isMongoId(),validarCampos]
,borrarProductos)

module.exports = router;