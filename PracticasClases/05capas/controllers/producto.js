// SE DECLARAN LAS CONSTANTES CON EL FRAMEWORK
// SE DECLARA LA CONSTANTE PARA TENER ACCESO A LOS MODELOS.

const {response} = require('express')
const {Producto} = require ('../models')

// SE DECLARA UNA CONSTANTE PARA OBTENER LOS DATOS DE MANERA ASINCRÓNICA, EN LA CUAL ESTARÁN DENTRO MÁS ATRIBUTOS DECLARADOS.

const   obtenerProductos = async (req, res = response) =>{

    const {Limite=10, Desde=0} = req.query
    const query = {estado:true}
    
    const [total, datos] = await Promise.all([
        Producto.countDocuments(query),
        Producto.find(query),

    ])

    res.json({
        total,
        datos,
    })

}

// SE DECLARA UNA CONSTANTE PARA OBTENER LOS DATOS POR LA ID DEL PRODUCTO

const obtenerProducto = async (req, res = response) =>{

    const {id} = req.params
    const producto = await Producto.findById(id)
    if (!producto) {
        return res.status(404).json({
            message: 'El producto no existe'
        })
    }
    res.json(producto);
    

}

// CREACION DE PRODUCTO, LOS DATOS SON OBLIGATORIOS, EN CASO DE HABER PRODUCTOS REPETIVOS SALTARÁ UN ERROR.

const crearProductos = async (req, res) =>{

    const {estado, ...body} = await req.body;
    
    const productoExistente = await Producto.findOne({ nombre:body.nombre})

    if (productoExistente) {
        return res.status(400).json({
            message:
            `El producto con ese nombre ya existe ${productoExistente.nombre}`
        })
    }

    const producto = new Producto(body);
    const productoNuevo = await producto.save();
    res.status(201).json(productoNuevo);    

}

// SE DECLARA UNA VARIABLE LA CUAL ESTARÁ ENCARGADA DE OBTENER LOS PARÁMETROS DE UN PRODUCTO Y ASÍ PODER ACTUALIZARLOS.

const actualizarProductos = async (req, res) =>{

    const {id} = await req.params;
    const {estado, ...data} = await req.body;
    const productoModificado = await Producto.findByIdAndUpdate(id, data, {new:true});
    res.json(productoModificado);
    
}

// ESTA CONTANTE NO BORRA EL PRODUCTO COMO TAL, SOLO LE CAMBIA EL ESTADO A OCULTO, Y COMO EN LA PARTE DE MOSTRAR TENEMOS UN FILTRO DE ESTADO:TRUE
// TODOS LOS QUE ESTÉN OCULTOS NO SERÁN MOSTRADOS.

const borrarProductos = async (req, res) =>{

    const {id} = await req.params
    const productoBorrado = await Producto.findByIdAndUpdate(id,{estado:false}, {new:true});
    res.json(productoBorrado);

}

// SE EXPORTAN LOS MÓDULOS.

module.exports = {
    obtenerProductos,
    obtenerProducto,
    crearProductos,
    borrarProductos,
    actualizarProductos,
}