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
exports.eliminarProducto = exports.actualizarProducto = exports.crearProductos = exports.obtenerProducto = exports.obtenerProductos = void 0;
const models_1 = require("../models");
const obtenerProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Limite = '10', Desde = '0' } = req.query;
    const query = { estado: true };
    const [total, datos] = yield Promise.all([
        models_1.Product.countDocuments(query),
        models_1.Product.find(query)
            .skip(Number(Desde))
            .limit(Number(Limite))
    ]);
    res.json({
        total,
        datos,
    });
});
exports.obtenerProductos = obtenerProductos;
const obtenerProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const producto = yield models_1.Product.findById(id);
    res.json(producto);
});
exports.obtenerProducto = obtenerProducto;
const crearProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { estado } = _a, body = __rest(_a, ["estado"]);
    const existeProducto = yield models_1.Product.findOne({ nombre: body.nombre });
    if (existeProducto) {
        return res.status(400).json({
            message: 'El producto ya existe'
        });
    }
    const producto = new models_1.Product(body);
    const productoNuevo = yield producto.save();
    return res.status(201).json(productoNuevo);
});
exports.crearProductos = crearProductos;
const actualizarProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _b = req.body, { estado } = _b, body = __rest(_b, ["estado"]);
    const productoActualizado = yield models_1.Product.findByIdAndUpdate(id, body, { new: true });
    res.json(productoActualizado);
});
exports.actualizarProducto = actualizarProducto;
const eliminarProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const productoEliminado = yield models_1.Product.findByIdAndUpdate(id, { Estado: false }, { new: true });
    res.json(productoEliminado);
});
exports.eliminarProducto = eliminarProducto;
