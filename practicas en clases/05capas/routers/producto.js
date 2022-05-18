const {Router} = require('express');

const {check} = require('express-validator');


const {obtenerProductos,
       obtenerProducto,
       crearProductos,
       actualizarProductos,
       borrarProductos
} = require('../controllers').Producto;

const { ValidarCampos } = require ('../middlewares');

const router = Router ();

router.get('/' 
[check('nombre', 'El nombre es obligatorio').isEmpty()]
, obtenerProductos)


router.get('/:id'
[check('nombre', 'El nombre es obligatorio').isEmpty()]
, obtenerProducto)


router.post('/' , 
[check('nombre', 'El nombre es obligatorio').not().isEmpty(),ValidarCampos]
, crearProductos)

router.put('/:id' ,
[check('id','El id no es válido').isMongoId()]
,actualizarProductos)


router.delete('/' 
[check('id','El id no es válido').isMongoId()]
,borrarProductos)

module.exports = router;