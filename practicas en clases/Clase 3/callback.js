const platos=[
    {
        id:1,
        descripcion:'Encebollado',
        idrestaurante:1,
    },
    {
        id:2,
        descripcion:'Ceviche',
        idrestaurante:1,
    },
    {
        id:3,
        descripcion:'Tigrillo',
        idrestaurante:2,
    },
    {
        id:4,
        descripcion:'Tostadas',
        idrestaurante:2,
    },

 ]
 const restaurantes=[
     {
        id:1,
        nombre:'Byo sazón',
     },
     {
        id:2,
        nombre:'A leña INC.',
     },
 ]

 function buscarPlatoPorId(id, callback)
 {
    const plato =  platos.find((plato)=>  plato.id === id );
    if (!plato)
    {
        const error =  new Error();
        error.message=`Plato no encontrado con id ${id}`;
        return callback(error)
    }
    return callback(null, plato);
 }
//  function buscarRestaurantePorId(id, callback)
//  {
//      const restaurante = restaurantes.find((restaurante)=> restaurante.id=== id);   //5==='5'
//      if (!restaurante)
//      {
//          const error =  new Error();
//          error.message=`Restaurante con id ${id} no ha podido ser encontrado`;
//          return callback(error)
//      }
//      return callback(null, restaurante);
//  }

 buscarPlatoPorId(1, (erra, plato)=>{
    if (erra)
    {
        console.log(erra.message);
        return;
    }
//     buscarRestaurantePorId(plato.idrestaurante  , (err, restaurante)=>{
//         if (err)
//         {
//             console.log(err.message);
//             return;
//         }
//         plato.restaurante = restaurante;
//         delete plato.idrestaurante;
        console.log(plato);
//         // buscarCiudadPorId(idciudad, (err, ciudad)=>{
//         //     if (err)
//         //     {

//         //     }
//         //     //
//         // })
        
//     })
 })
