import {Router} from 'express';
import {check} from 'express-validator'
import {Producto} from '../controllers'

const { crearProductos, obtenerProductos, obtenerProducto } = Producto;

import funciones from '../middlewares'

const {validarCampos} = funciones;

const router = Router();

router.get('/', obtenerProductos)

router.get('/:id'
,check('id', 'Debe ser un ID válido').isMongoId
,validarCampos
,obtenerProducto)

router.post('/'
,check('nombre', '').not().isEmpty
,validarCampos
,crearProductos)

export {router}
