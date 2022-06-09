import mongoose from "mongoose";
import { Schema, model} from "mongoose";
import { IProducto } from '../interfaces/IProducto'

// SE CREAN LOS PRODUCTOS, CON LOS RESPECTIVOS ESTADOS.

const ProductoSchema: mongoose.Schema = new Schema <IProducto> ({
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

const Product: mongoose.Model<IProducto> = model <IProducto> ('Producto', ProductoSchema);

export {
    Product
}