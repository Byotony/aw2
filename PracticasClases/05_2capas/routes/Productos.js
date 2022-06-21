const {Router}=require('express');
const {check}=require('express-validator')
const{ObtenerProducto,ObtenerProductos,CrearProducto,ActualizarProducto,BorrarProducto}=require('../controllers').Producto;
const {validarCampos}=require('../middlewares');
const router=Router();
router.get('/',ObtenerProductos);//Obtener Productos
router.get('/:id', [check('id', 'El id no es valido').isMongoId],ObtenerProducto);//Obtener Producto
router.post('/', [check('Nombre', 'El nombre es obligatorio').not().isEmpty(), validarCampos],CrearProducto);//CrearProducto
router.put('/:id', [check('id', 'El id no es valido').isMongoId],ActualizarProducto);//ActualizarProducto
router.delete('/:id', [check('id', 'El id no es valido').isMongoId],BorrarProducto);//BorrarProducto
module.exports=router;
