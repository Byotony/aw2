// SE CREA LA CONSTANTE CON EL FRAMEWORK

const {Router} = require('express');

// SE CREA UNA CONSTANTE CON LA LIBRERÍA DE VALIDATOR

const {check} = require('express-validator');

// SE CREAN LOS PROCESOS.

const {obtenerProductos,
       obtenerProducto,
       crearProductos,
       actualizarProductos,
       borrarProductos
} = require('../controllers').Producto;

const { validarCampos } = require ('../middlewares');

const router = Router ();

// SE LE DA LOS INDICACIONES A LOS PROCESOS CREADOS.

router.get('/',obtenerProductos);//Obtener Productos
router.get('/:id',obtenerProducto);//Obtener Producto
router.post('/', validarCampos,crearProductos);//CrearProducto
router.put('/:id', actualizarProductos);//ActualizarProducto
router.delete('/:id', borrarProductos);//BorrarProducto

// router.get('/'
// , obtenerProductos);


// router.get('/:id'
// [check('nombre', 'El nombre es obligatorio').isEmpty()]
// , obtenerProducto);


// router.post('/' , 
// [check('nombre', 'El nombre es obligatorio').not().isEmpty(),validarCampos]
// , crearProductos);


// router.put('/:id' ,
// [check('id','El id no es válido').isMongoId()]
// ,actualizarProductos);


// router.delete('/:id' 
// [check('id','El id no es válido').isMongoId()]
// ,borrarProductos);

// SE EXPORATAN LOS MODULOS.

module.exports = router;