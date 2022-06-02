// SE DECLARAN LOS ARREGLOS CON LOS DATOS.

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

 // SE DECLARA EL ARREGLO DE RESTAURANTE CON LOS RESPECTIVOS DATOS.

 const restaurantes=[
     {
        id:1,
        nombre:'La carreta de Tono',
     },
     {
        id:2,
        nombre:'Miguelito Restaurant',
     },
 ]

// SE REALIZA UN FUNCION ASINCRÓNICA PARA BUSCAR EL PLATO MEDIANTE UNA ID, EN CASO DE NO ENCONTRAR EL DATO POR ID SALTARÍA EL CATCH
// EL CUAL TIENE DECLARADO UN ERROR QUE NOS DARÁ A CONECER DE QUE EL PLANO NO FUE ENCONTRADO.

async function buscarPlatoPorId(id)
{
    const plato  = platos.find((plato)=> plato.id=== id);
    if (!plato)
    {
        const error= new Error();
        error.message=`El plato con id ${id} no pudo ser encontrado`;
        throw error;
    }
    return plato;
}

// SE REALIZA UN FUNCION ASINCRÓNICA PARA BUSCAR RESTAURANTES MEDIANTE UNA ID, EN CASO DE NO ENCONTRAR EL DATO POR ID SALTARÍA EL CATCH
// EL CUAL TIENE DECLARADO UN ERROR QUE NOS DARÁ A CONECER DE QUE EL RESTAURANTE NO FUE ENCONTRADO.

function buscarRestaurantePorId(id)
{
    const restaurante =  restaurantes.find((restaurante)=> restaurante.id===id);
    if (!restaurante)
    {
        const error = new Error();
        error.message=`El restaurante con id ${id} no pudo ser encontrado`;
        throw error;
    }
    return restaurante;
}

// SE REALIZA UN FUNCION ASINCRÓNICA PARA BUSCAR EL PLATO MEDIANTE UNA ID PASÁNDOLE COMO DATO EL ID, EN CASO DE NO ENCONTRAR EL DATO POR ID SALTARÍA EL CATCH
// EL CUAL TIENE DECLARADO UN ERROR QUE NOS DARÁ A CONECER DE QUE EL PLANO NO FUE ENCONTRADO.

(async ()=> {
    try {
        const plato =   await buscarPlatoPorId(1);
        const restaurante = await buscarRestaurantePorId(plato.idrestaurante);
        plato.restaurante= restaurante;
        delete plato.idrestaurante;
        console.log(plato);
    } catch (error) {
        console.log(error.message)
    }
})();


