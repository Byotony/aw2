const {response}=require('express');
const {Producto}= require('../models')


const ObtenerProductos=async(req,res=response)=>{
    const{Limite=10,Desde=0}=req.query
    const query={Estado:true};
    const [total,datos]=await Promise.all(
        [
            Producto.countDocuments(query),
            Producto.find(query),
            
    ])
    res.json({
        total,
        datos,
    })
}
const ObtenerProducto = async(req, res=response) => {
    const{id}=req.params;
    const producto=await Producto.findById(id);
    res.json(producto);

}
const CrearProducto =async (req, res) => {
    const {Estado,...body}=req.body; 
    const ProductoExiste= await Producto.findOne({
        Nombre:body.Nombre
    })  
    if (ProductoExiste) {
        res.status(400).json({
            message:`El Producto con ese nombre ya existe ${ProductoExiste.Nombre}`
        })
    } 
    const producto=new Producto(body);
    const ProductoNuevo=await producto.save();
    res.status(201).json(ProductoNuevo);

}
const ActualizarProducto =async (req, res) => {
    const {id}=req.params;
    const {estado,...body}=req.body;
    const ProductoModificado=await Producto.findByIdAndUpdate(id,body,{new:true});
    res.json(ProductoModificado);
}
const  BorrarProducto=async (req, res) => {
    const{id}=req.params;
    const ProductoBorrado=await Producto.findByIdAndUpdate(id,{Estado:false},{new:true})
    res.json(ProductoBorrado);
}
module.exports={
    ObtenerProductos,
    ObtenerProducto,
    CrearProducto,
    ActualizarProducto,
    BorrarProducto
}