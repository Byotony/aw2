// ESQUEMAS Y MODULOS.

const { Schema, model} = require('mongoose')

// SE CREAN LOS PRODUCTOS, CON LOS RESPECTIVOS ESTADOS.

const ProductoSchema = Schema ({
    nombre: {
        type: String,
        required:true,
        unique:true
    },

    estado: {
        type:Boolean,
        default: true,
        required:true
    },
    precio:{
        type: Number,
        default:0
    },
    costo:{
        type:Number,
        default:0,
    },
    minimo:{
        type:Number,
        default:0,
    },
    stock:{
        type:Number,
        default:0,
    },

})

// SE EXPORTAN LOS MÓDULOS.

module.exports = model ('Producto', ProductoSchema);
