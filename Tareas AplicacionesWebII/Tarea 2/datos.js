/** Arreglo de datos sobre el administrdor del parqueadero */
const admins = [
    {
        adminId:1, /* Identificador */
        cedula: 1515178051, /* Numero de cedula*/
        fullName: 'Guerrero Zamora Welinton', /* Nombres completos*/
    },
    {
        adminId:2,
        cedula: 1316552304,
        fullName: 'Carreño Roger Erick', 
    },
];

/**Arreglo de datos sobre los parqueaderos */
const parkings = [
    {
        parkingId: 1, /* Id del parqueadero registrado */
        capacidad: 20, /* Numero de puestos en el parqueadero*/
        hPrecio: 2, /* Precio por hora */
        hGratis: 6, /* Horas gratis */
        adminId: 1, /* Identificador del administrador del parqueadero*/
    },
    {
        parkingId: 2, 
        capacidad: 40, 
        hPrecio: 3, 
        hGratis: 9, 
        adminId: 1,
    },
    {
        parkingId: 3, 
        capacidad: 35, 
        hPrecio: 1, 
        hGratis: 0, 
        adminId: 2,
    },
];

/**Arreglo de usuarios/clientes que han usado los diferentes parqueaderos */
const users = [
    {
        userId:1,  /* Identificador */
        cedula: 1313831982,  /* Numero de cedula*/
        fullName: 'Arteaga Chilan Jose' /* Nombres completos*/
    },
    {
        userId:2,
        cedula: 1310000000,
        fullName: 'Gonzales Sacon Benjie' 
    },
    {
        userId:3,
        cedula: 1350957595,
        fullName: 'Gorozabel Vinces Dalember' 
    },
    {
        userId:4,
        cedula: 1310000001,
        fullName: 'Alcivar Briones Cris' 
    },
    {
        userId:5,
        cedula: 1310000002,
        fullName: 'Cevallos Macias Jhon' 
    },
    {
        userId:6,
        cedula: 1310000003,
        fullName: 'Rodriguez Zambrano Jofrre' 
    },
    {
        userId:7,
        cedula: 1316751633,
        fullName: 'Palacios Bello Anthony', 
    },
];

/**Arreglo de los vehiculos que han usado los diferentes parqueaderos */
const cars = [
    {   
        carId: 1, /* Identificador*/
        numPlaca: '0001', /*Numero de Placa*/
        carType: 'Camioneta', /* Tipo de vehiculo*/
        color: 'Azul', /* Color */
        marca: 'Sedan', /* Marca */
        userId: 1, /* Identificador del dueño del vehiculo */
    },
    {   
        carId: 2,
        numPlaca: '0002',
        carType: 'Bus',
        color: 'Amarillo',
        marca: 'Mercedes-Benz',
        userId: 2,
    },
    {   
        carId: 3,
        numPlaca: '0003',
        carType: 'Auto',
        color: 'Gris',
        marca: 'Audi',
        userId: 3,
    },
    {   
        carId: 4,
        numPlaca: '0004',
        carType: 'Auto',
        color: 'Rojo',
        marca: 'Toyota',
        userId: 4,
    },
    {   
        carId: 5,
        numPlaca: '0005',
        carType: 'Auto',
        color: 'Verde',
        marca: 'Honda',
        userId: 5,
    },
    {   
        carId: 6,
        numPlaca: '0006',
        carType: 'Camioneta',
        color: 'Blanco',
        marca: 'Ford',
        userId: 5,
    },
    {   
        carId: 7,
        numPlaca: '0007',
        carType: 'Moto',
        color: 'Negro',
        marca: 'Pulsar 200',
        userId: 6,
    },
    {   
        carId: 8,
        numPlaca: '0008',
        carType: 'Moto',
        color: 'Purpura',
        marca: 'Pulsar 200',
        userId: 7,
    },
    {   
        carId: 9,
        numPlaca: '0009',
        carType: 'Auto',
        color: 'Blanco',
        marca: 'Kia',
        userId: 7,
    },
];

const dataForPayments = [
    {
        dataId: 1, /*Identificador de los datos*/
        parkingId: 1, /*Identificador del parqueadero*/
        hEntrada: '08/25/2020 11:00:00', /*Hora de entrada*/
        hSalida: '08/25/2020 13:00:00', /*Hora de salida*/
        numPlaca: '0001', /*Identificador del vehiculo*/
    },
    {
        dataId: 2, 
        hEntrada: '08/25/2020 08:40:00', 
        hSalida: '08/25/2020 15:10:00', 
        parkingId: 1, 
        numPlaca: '0002', 
    },
    {
        dataId: 3, 
        hEntrada: '08:00', 
        hSalida: '15:00', 
        parkingId: 1, 
        numPlaca: '0003', 
    },
    {
        dataId: 4,  
        hEntrada: '10:00', 
        hSalida: '18:00', 
        parkingId: 2, 
        numPlaca: '0004', 
    },
    {
        dataId: 5,  
        hEntrada: '10:00', 
        hSalida: '20:00', 
        parkingId: 2, 
        numPlaca: '0005', 
    },
    {
        dataId: 6, 
        hEntrada: '10:00', 
        hSalida: '20:00', 
        parkingId: 2, 
        numPlaca: '0006', 
    },
    {
        dataId: 7,  
        hEntrada: '10:00', 
        hSalida: '14:00', 
        parkingId: 2, 
        numPlaca: '0007', 
    },
    {
        dataId: 8, 
        hEntrada: '08:00', 
        hSalida: '13:00', 
        parkingId: 3, 
        numPlaca: '0008', 
    },
    {
        dataId: 9, 
        hEntrada: '08:00', 
        hSalida: '12:00', 
        parkingId: 3, 
        numPlaca: '0009', 
    },
    {
        dataId: 10,  
        hEntrada: '15:00', 
        hSalida: '22:00', 
        parkingId: 1, 
        numPlaca: '0009', 
    },
];
// Exportamos los arreglos 
module.exports = {
    admins, parkings, users, cars, dataForPayments
}