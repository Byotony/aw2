const datos = require("./datos.js"); //Se importan los arreglos creados en el archivo datos.js

// Una función para buscar un vehículo a  la cual se le pasa como parámetro el número de placa.
async function buscarVehiculoPorPlaca(numPlaca) 
{
    //Creación de variable car para buscar el número de placa dentro de la constante datos a travez
    // del numero de placa que debe ser igual al numero de placa del archivo js donde está el arreglo
    const car = datos.cars.find((car)=>car.numPlaca === numPlaca); 
    //Si no se encuentra el vehículo con el número de placa entonces se muestra el mensaje de error
    if (!car) {
        const error = new Error();
        error.message= `El vehiculo con placa ${numPlaca} no fue encontrado`;
        throw error;
    }
    //En caso de que se encuentre el número de placa devolvemos la constante car donde se almacena este con diferentes atributos.
    return car;
}
// Una función para buscar un usuario a  la cual se le pasa como parámetro el ID de usuario.
async function buscarUsarioVehiculoPorUserId(userId) 
{
    //Creación de variable user para buscar el usuario dentro de la constante datos a travez
    // del Id de usuario que debe ser igual al Id de usuario del archivo js donde está el arreglo
    const user = datos.users.find((user)=>user.userId === userId);
    //Si no se encuentra el usuario con el Id entonces se muestra el mensaje de error
    if (!user) {
        const error = new Error();
        error.message= `El dueño del carro con id ${user.userId} no fue encontrado`;
        throw error;
    }
    //En caso de que se encuentre el usuario devolvemos la constante user donde se almacena este con diferentes atributos.
    return user;
}
// Una función para buscar los datos de pago a  la cual se le pasa como parámetro el número de placa.
async function buscarDataForPaymentsPorPlaca(numPlaca) 
{
    //Creación de variable dataForPayment para buscar los datos de pago dentro de la constante datos a travez
    // del número de placa que debe ser igual al numPlaca del archivo js donde está el arreglo
    const dataForPayment = datos.dataForPayments.find((dataForPayment)=>dataForPayment.numPlaca === numPlaca);
    //Si no se encuentran los datos de pago con el numPlaca entonces se muestra el mensaje de error
    if (!dataForPayment) {
        const error = new Error();
        error.message= `El parking con id ${dataForPayment.parkingId} no fue encontrado`;
        throw error;
    }
    //En caso de que se encuentren los datosa de pago devolvemos la constante dataForPayment donde se almacena este con diferentes atributos.
    return dataForPayment;
}
// Una función para buscar un parking a  la cual se le pasa como parámetro el parkingId.
async function buscarParkingPorId(parkingId) 
{
    //Creación de variable parking para buscar un parking dentro de la constante datos a travez
    // del parkingId que debe ser igual al parkingId del archivo js donde está el arreglo
    const parking = datos.parkings.find((parking)=>parking.parkingId === parkingId);
    //Si no se encuentra el parking con el parkingId entonces se muestra el mensaje de error
    if (!parking) {
        const error = new Error();
        error.message= `El parking con id ${parking.parkingId} no fue encontrado`;
        throw error;
    }
    //En caso de que se encuentre el parking devolvemos la constante parking donde se almacena este con diferentes atributos.
    return parking;
}



(async ()=> {
    try {
        // se ejecutan las funciones desde arriba y da paso al parámetro que se necesita 
        const car =  await buscarVehiculoPorPlaca('0009');
        const dataForPayment = await buscarDataForPaymentsPorPlaca(car.numPlaca);
        const user = await buscarUsarioVehiculoPorUserId(car.userId);
        const parking = await buscarParkingPorId(dataForPayment.parkingId);
        //Se asigna los datos de hora de entrada y de salida a una variable tipo date
        var hEntrada = new Date(dataForPayment.hEntrada);
        var hSalida = new Date(dataForPayment.hSalida);
        var dHours = ((hSalida.getHours()-hEntrada.getHours()));
        var dMinus = ((hSalida.getMinutes()-hEntrada.getMinutes()));
        //Una discreta validación 
        if (hSalida.getMinutes() < hEntrada.getMinutes()) {
            var dMinus = (60-hEntrada.getMinutes()+hSalida.getMinutes());
            dHours = dHours -1;
        }else{
            var dMinus = (hSalida.getMinutes()-hEntrada.getMinutes());
        } 
        //Se calcula el costo del parqueadero teniendo en cuenta las horas consumidas, horas gratis y el precio pot hora
        let precio = 0
        if (parking.hGratis>dHours) {
            console.log("No tiene costo el parqueadero")
        } else {
            
            if (dMinus > 30) {
                precio = (dHours + 1) * parking.hPrecio;
            } else {
                precio = dHours * parking.hPrecio;
            }  
        }
        delete dataForPayment.numPlaca;
        delete car.userId;
        car.dataForPayment = dataForPayment;
        car.user = user;
        //Se muestran los datoos de acuerdo a lo requerido por el sistema 
        console.log(car);
        console.log("Horas gratis: "+ parking.hGratis+" h");
        console.log("Precio por hora: "+ parking.hPrecio+" $");
        console.log("La hora siguiente solo se cobrara si excede los 30min entre ellas.");
        console.log(dHours + " horas con " + dMinus +" minutos.") 
        console.log("Precio: "+ precio +" $")   
    } catch (error) {
        console.log(error.message);
    }
})();
                                
