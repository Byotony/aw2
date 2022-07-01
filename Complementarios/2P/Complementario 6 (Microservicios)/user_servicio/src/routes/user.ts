import {Router} from 'express';
import {check} from 'express-validator'
import { Usuario } from '../controllers';

const{
    authUser,
    registerOwnerParking,
    getUsersOwnerParkings,
}= Usuario;

//ValidarCampos debe estar con el nombre que lo especificamos en el middlewars del index
import funciones from '../middlewares'

const {validarCampos} = funciones;

const router = Router();

//User lvl 1 y 2
// http://localhost:3000/v1/g6/api/users/login
router.post('/login',
check('/login', 'Datos incorrectos')
,validarCampos
,authUser);

// User lvl 1
// http://localhost:3000/v1/g6/api/users/OwnerParkings
router.post('/OwnerParkings',
check('/OwnerParkings', 'Error en el check')
,validarCampos
,registerOwnerParking);

// http://localhost:3000/v1/g6/api/users/OwnerParkings
router.get('/',
check('/OwnerParkings', 'Error en el check')
,getUsersOwnerParkings);

export {
    router
}