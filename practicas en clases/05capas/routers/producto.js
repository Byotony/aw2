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

router.get('/',obtenerProductos);//Obtener Productos
router.get('/:id', [check('id', 'El id no es valido').isMongoId],obtenerProducto);//Obtener Producto
router.post('/', [check('Nombre', 'El nombre es obligatorio').not().isEmpty(), validarCampos],crearProductos);//CrearProducto
router.put('/:id', [check('id', 'El id no es valido').isMongoId],actualizarProductos);//ActualizarProducto
router.delete('/:id', [check('id', 'El id no es valido').isMongoId],borrarProductos);//BorrarProducto

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

module.exports = router;