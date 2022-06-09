"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
// SE CREAN LOS PRODUCTOS, CON LOS RESPECTIVOS ESTADOS.
const ProductoSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    precio: {
        type: Number,
        default: 0
    },
    costo: {
        type: Number,
        default: 0,
    },
    minimo: {
        type: Number,
        default: 0,
    },
    stock: {
        type: Number,
        default: 0,
    },
});
// SE EXPORTAN LOS MÓDULOS.
const Product = (0, mongoose_1.model)('Producto', ProductoSchema);
exports.Product = Product;
