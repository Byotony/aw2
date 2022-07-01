"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const controllers_1 = require("../controllers");
const { authUser, registerOwnerParking, getUsersOwnerParkings, } = controllers_1.Usuario;
//ValidarCampos debe estar con el nombre que lo especificamos en el middlewars del index
const middlewares_1 = __importDefault(require("../middlewares"));
const { validarCampos } = middlewares_1.default;
const router = (0, express_1.Router)();
exports.router = router;
//User lvl 1 y 2
// http://localhost:3000/v1/g6/api/users/login
router.post('/login', (0, express_validator_1.check)('/login', 'Datos incorrectos'), validarCampos, authUser);
// User lvl 1
// http://localhost:3000/v1/g6/api/users/OwnerParkings
router.post('/OwnerParkings', (0, express_validator_1.check)('/OwnerParkings', 'Error en el check'), validarCampos, registerOwnerParking);
// http://localhost:3000/v1/g6/api/users/OwnerParkings
router.get('/', (0, express_validator_1.check)('/OwnerParkings', 'Error en el check'), getUsersOwnerParkings);
