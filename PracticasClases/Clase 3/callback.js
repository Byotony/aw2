// SE DECLARAN LOS ARREGLOS.

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

 //SE DECLARA OTRA ARREGLO

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

 // SE REALIZA UN FUNCION ASINCRÓNICA PARA BUSCAR EL PLATO MEDIANTE UNA ID, Y SE REALIZA UNA COMPARATIVA ENTRE EL DATO DE PLATOID CON LA ID
 // ESTOS MENDIANTE UNA FUNCIÓN SE VERÁ SIN SON IDENTICOS, EN CASO DE NO SER ASÍ, SE CREA UNA CONSTANTE CON EL MENSAJE DE ERROR, EN CASO DE
 // QUE SI ENCUENTREN EL PLATO, ESTE SERÁ RETORNADO MEDIANTE EL CALLBACK.

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

// SE LLAMA AL MÉTODO PARA BUSCAR EL PLATO POR ID Y SE LE PASA EL RESPECTIVO ID.

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
