const { Schema,model } = require('mongoose');
const ProductoSchema = Schema({
    Nombre: {
        type: String,
        required: [true, 'El nombre del producto es obligatorio'],
        unique: true,
    },
    Estado: {
        type: Boolean,
        required: true,
        default: true,
    },
    Precio: {
        type: Number,
        default: 0,
    },
    Costo: {
        type: Number,
        default: 0,
    },
    Minimo: {
        type: Number,
        default: 0,
    },
    Stock: {
        type: Number,
        default: 0,
    },
});
module.exports = model('Producto', ProductoSchema);