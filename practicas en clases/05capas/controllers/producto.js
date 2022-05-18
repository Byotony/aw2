const { response} = require('express')
const { body } = require('express-validator')

const {Producto} = require ('../models')

const   obtenerProductos = async (req, res = response) =>{

    const {limite=10, desde=0} = req.query
    const query = {estado:true}
    
    const [total, productos] = await Promise.all([
        Producto.countDocuments(query),
        Producto.find(query)
    ])

    res.json({
        total,
        productos
    })

}

const obtenerProducto = async (req, res = response) =>{

    const {id} = req.params
    const producto = await Producto.findByid(id)
    res.json(producto);

}

const crearProductos = async (req, res) =>{

    const {estado, ...body} = await req.body;
    
    const productoExistente = await Producto.findOne({ nombre:body.nombre})

    if (productoExistente) {
        res.status(400).json({
            message:
            `El producto con ese nombre ya existe ${productoExistente.nombre} `
        })
    }

    const producto = new Producto(body);
    await producto.save ();
    res.status(201).json(productoNuevo);    

}

const actualizarProductos = async (req, res) =>{

    const {id} = await req.params;
    const {estado, ...data} = await req.body;
    const productoModificado = await Producto.findByIdAndUpdate(id, data, {new:true});
    res.json(productoModificado);
    
}

const borrarProductos = async (req, res) =>{

    const {id} = await req.params
    const productoBorrado = await Producto.findByIdAndUpdate({estado:false}, {new:true});
    res.json(productoBorrado);

}


module.exports = {
    obtenerProducto,
    obtenerProducto,
    crearProductos,
    borrarProductos,
    actualizarProductos,
}