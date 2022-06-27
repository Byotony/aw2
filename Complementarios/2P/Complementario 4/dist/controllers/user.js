"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersOwnerParkings = exports.registerOwnerParking = exports.authUser = void 0;
const models_1 = require("../models");
const authUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ci, password } = req.body;
    models_1.User.findOne({ ci }, (err, user) => {
        if (err) {
            res.status(400).json({
                message: 'Error al autenticar el usuario.'
            });
        }
        else if (!user) {
            res.status(400).json({
                message: 'Usuario no registrado.'
            });
        }
        else
            process.env.dataUser = user;
        res.status(200).json({
            message: 'Usuario autenticado.',
            datos: user
        });
        // user.isCorrectPassword(password, (err: Error, result: any) => {
        //     if (err) {
        //         res.status(400).json({
        //             message:
        //                 'Error al autenticar el usuario.'
        //         })
        //     } else if (result) {
        //         process.env.dataUser = user
        //         res.status(200).json({
        //             message:
        //                 'Usuario autenticado.',
        //             datos:
        //                 user
        //         });
        //     } else {
        //         res.status(400).json({
        //             message:
        //                 'Usuario y/o contraseña incorrecta.'
        //         })
        //     }
        // })
    });
});
exports.authUser = authUser;
//User lvl 1
const registerOwnerParking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = __rest(req.body, []);
        //2 significa que sera un OwnerParking
        body.userAdmin = 2;
        const userExiste = yield models_1.User.findOne({ ci: body.ci });
        if (userExiste) {
            res.status(400).json({
                message: `El usuario con esa cédula ya existe ${userExiste.ci}.`
            });
        }
        else {
            const user = new models_1.User(body);
            const userNuevo = yield user.save();
            res.status(200).json({
                message: 'Usuario registrado correctamente.',
                datos: userNuevo,
            });
        }
    }
    catch (error) {
        res.status(201).json("Error en el sistema.");
    }
});
exports.registerOwnerParking = registerOwnerParking;
const getUsersOwnerParkings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { userAdmin: 2 };
    const [total, users] = yield Promise.all([
        models_1.User.countDocuments(query),
        models_1.User.find(query),
    ]);
    res.status(200).json({
        message: 'Lista de usuarios dueños de parqueaderos.',
        total: total,
        datos: users,
    });
});
exports.getUsersOwnerParkings = getUsersOwnerParkings;
