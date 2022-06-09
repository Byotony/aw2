import { Product } from "../models";
import { IProducto } from "../interfaces";
import { Request, Response } from "express";

const obtenerProductos = async (req: Request, res: Response)=>{

    const {Limite='10', Desde='0'} = req.query
    const query = {estado:true}
    
    const [total, datos]:[Number, IProducto []] = await Promise.all([
        Product.countDocuments(query),
        Product.find(query)
        .skip(Number(Desde))
        .limit(Number(Limite))

    ])

    res.json({
        total,
        datos,
    })    

}
const obtenerProducto = async (req: Request, res: Response)=>{

    const {id} = req.params
    const producto: IProducto | null = await Product.findById(id);
    res.json(producto)

}
const crearProductos = async (req: Request, res: Response)=>{
    const {estado, ...body} = req.body as IProducto;

    const existeProducto = await Product.findOne({nombre: body.nombre});
    
    if (existeProducto) {
        return res.status(400).json({
        message: 'El producto ya existe'
        });
}

const producto = new Product(body);
const productoNuevo = await producto.save();
return res.status(201).json(productoNuevo);
}

export {
    obtenerProductos,
    obtenerProducto,
    crearProductos,
}