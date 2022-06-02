//Conexion a la base de datos, ingresamos el usuario y contraseña de la resepectiva base de datos.
const mongoose = require('mongoose');
const conexion = "mongodb+srv://Byotony:Palacios12@cluster0.2m1mx.mongodb.net/EjemploParking?retryWrites=true&w=majority";//Coloquen su link de mongo dentro de la comillas

//  Esquemas, aquí ya declaramos todas nuestras constantes las cuales serán empleadas para el ingreso de datos
(async () => {
    const estadoConexion = await mongoose.connect(conexion)

    const admins = mongoose.model('admins', 
    { 
        cedula: String , 
        fullName: String,
    })

    const users = mongoose.model('users', 
    { 
        cedula: String , 
        fullName: String,
    })

    const cars = mongoose.model('cars', 
    { 
        numPlaca: String , 
        carType: String,
        color: String,
        marca: String,
        choferFullname: String,
        userId: {type: mongoose.Types.ObjectId, ref: 'users'},
    })

    const parkings = mongoose.model('parkings', 
    { 
        hPrecio: Number, 
        hGratis: Number, 
        adminId: {type: mongoose.Types.ObjectId, ref: 'admins'},
        ubicacion: String,
        capacidad: Number, 
        parkingSpace: [{
            space: { type: String }, 
            available: { type: Boolean },
        }],
    })

    const detailsPayments = mongoose.model('detailsPayments', 
    {
        parkingId: {type: mongoose.Types.ObjectId, ref: 'parkings'},
        hEntrada: Date,
        hSalida: Date,
        carId: {type: mongoose.Types.ObjectId, ref: 'cars'},
        space: String,
        priceDolar: Number,
    })

    //Añadir datos
    // Ingresamos todos los datos pertinentes a cada tabla
    //Alt+ Shift + Flecha : Copiar mas de lo mismo
    //Alt + Flecha : Mover
    
    const admin1 = new admins({ cedula: '1515178051',fullName: 'Guerrero Zamora Welinton', })
    const admin2 = new admins({ cedula: '1316552304',fullName: 'Carreño Roger Erick',  })

    const user1 = new users({ cedula: '1313831982',fullName: 'Arteaga Chilan Jose', })
    const user2 = new users({ cedula: '1310000000',fullName: 'Gonzales Sacon Benjie',  })
    const user3 = new users({ cedula: '1350957595',fullName: 'Gorozabel Vinces Dalember', })
    const user4 = new users({ cedula: '1310000001',fullName: 'Alcivar Briones Cris',  })
    const user5 = new users({ cedula: '1310000002',fullName: 'Cevallos Macias Jhon',  })
    const user6 = new users({ cedula: '1310000003',fullName: 'Rodriguez Zambrano Jofrre',  })
    const user7 = new users({ cedula: '1316751633',fullName: 'Palacios Bello Anthony',  })
    
    const guardarAdmin1 = await admin1.save();
    const guardarAdmin2 = await admin2.save();
    
    const guardarUser1 = await user1.save();
    const guardarUser2 = await user2.save();
    const guardarUser3 = await user3.save();
    const guardarUser4 = await user4.save();
    const guardarUser5 = await user5.save();
    const guardarUser6 = await user6.save();
    const guardarUser7 = await user7.save();
    
    

    const car1 = new cars({
        numPlaca: '0001', 
        carType: 'Camioneta', 
        color: 'Azul', 
        marca: 'Sedan', 
        choferFullname: 'Arteaga Chilan Jose',
        userId: guardarUser1._id,
    });
    const guardarCar1 = await car1.save();

    const car2 = new cars({
        numPlaca: '0002', 
        carType: 'Bus', 
        color: 'Amarillo', 
        marca: 'Mercedes-Benz', 
        choferFullname: 'Gonzales Sacon Benjie',
        userId: guardarUser2._id,
    });
    const guardarCar2 = await car2.save();

    const car3 = new cars({
        numPlaca: '0003', 
        carType: 'Auto', 
        color: 'Gris', 
        marca: 'Audi', 
        choferFullname: 'Gorozabel Vinces Dalember',
        userId: guardarUser3._id,
    });
    const guardarCar3 = await car3.save();

    const car4 = new cars({
        numPlaca: '0004', 
        carType: 'Auto', 
        color: 'Rojo', 
        marca: 'Toyota', 
        choferFullname: 'Alcivar Briones Cris',
        userId: guardarUser4._id,
    });
    const guardarCar4 = await car4.save();

    const car5 = new cars({
        numPlaca: '0005', 
        carType: 'Auto', 
        color: 'Verde', 
        marca: 'Honda', 
        choferFullname: 'Cevallos Macias Jhon',
        userId: guardarUser5._id,
    });
    const guardarCar5 = await car5.save();

    const car6 = new cars({
        numPlaca: '0006', 
        carType: 'Camioneta', 
        color: 'Blanco', 
        marca: 'Ford', 
        choferFullname: 'Cevallos Macias Jhon',
        userId: guardarUser5._id,
    });
    const guardarCar6 = await car6.save();

    const car7 = new cars({
        numPlaca: '0007', 
        carType: 'Moto', 
        color: 'Negro', 
        marca: 'Pulsar 200', 
        choferFullname: 'Rodriguez Zambrano Jofrre',
        userId: guardarUser6._id,
    });
    const guardarCar7 = await car7.save();

    const car8 = new cars({
        numPlaca: '0008', 
        carType: 'Moto', 
        color: 'Purpura', 
        marca: 'Pulsar 200', 
        choferFullname: 'Palacios Bello Anthony',
        userId: guardarUser7._id,
    });
    const guardarCar8 = await car8.save();

    const car9 = new cars({
        numPlaca: '0009', 
        carType: 'Auto', 
        color: 'Blanco', 
        marca: 'Kia', 
        choferFullname: 'Palacios Bello Anthony',
        userId: guardarUser7._id,
    });
    const guardarCar9 = await car9.save();


    // PARKINGS
    // Se hace el ingreso de los respectivos parkeaderos.

    const parking1 = new parkings ({
        hPrecio: 2, 
        hGratis: 6, 
        adminId: guardarAdmin1._id,
        ubicacion: "El Palmar",
        capacidad: 10,
        parkingSpace: [
            {space: "A1", available: false,},
            {space: "A2", available: false,},
            {space: "A3", available: true,},
            {space: "A4", available: true,},
            {space: "A5", available: true,},
            {space: "A6", available: true,},
            {space: "A7", available: true,},
            {space: "A8", available: true,},
            {space: "A9", available: true,},
            {space: "A10", available: true,},
        ],
    })
    const guardarParking1 = await parking1.save();

    const parking2 = new parkings ({
        hPrecio: 3, 
        hGratis: 4, 
        adminId: guardarAdmin1._id,
        ubicacion: "La Pradera",
        capacidad: 5,
        parkingSpace: [
            {space: "A1", available: false,},
            {space: "A2", available: false,},
            {space: "A3", available: false,},
            {space: "A4", available: false,},
            {space: "A5", available: true,},
        ],
    })
    const guardarParking2 = await parking2.save();

    const parking3 = new parkings ({
        hPrecio: 1, 
        hGratis: 0, 
        adminId: guardarAdmin2._id,
        ubicacion: "Costa Azul",
        capacidad: 8,
        parkingSpace: [
            {space: "A1", available: false,},
            {space: "A2", available: true,},
            {space: "A3", available: true,},
            {space: "A4", available: true,},
            {space: "A5", available: true,},
            {space: "A6", available: true,},
            {space: "A7", available: true,},
            {space: "A8", available: true,},
        ],
    })
    const guardarParking3 = await parking3.save();
    
    //Arreglo para el pago, se declaran los datos pertinentes.
    //YYYY-MM-DDTHH:MM:SS
    const detailsPayment1 = new detailsPayments ({
        parkingId: parking1._id,         
        hEntrada: '2022/05/15 11:30:00', 
        hSalida: '2022/05/15 18:00:00', 
        carId: car1._id,
        space: "A1", 
        priceDolar: 2, 
    })
    const guardarDetailsPayment1 = await detailsPayment1.save();
    
    const detailsPayment2 = new detailsPayments ({
        parkingId: parking1._id,         
        hEntrada: '2022/05/15 08:10:00', 
        hSalida: '2022/05/15 15:10:00', 
        carId: car2._id,
        space: "A2", 
        priceDolar: 2, 
    })
    const guardarDetailsPayment2 = await detailsPayment2.save();

    const detailsPayment3 = new detailsPayments ({
        parkingId: parking2._id,         
        hEntrada: '2022/05/15 08:00:00', 
        hSalida: '2022/05/15 15:00:00', 
        carId: car3._id,
        space: "A1", 
        priceDolar: 9, 
    })
    const guardarDetailsPayment3 = await detailsPayment3.save();

    const detailsPayment4 = new detailsPayments ({
        parkingId: parking2._id,         
        hEntrada: '2022/05/15 08:00:00', 
        hSalida: '2022/05/15 15:00:00', 
        carId: car4._id,
        space: "A2", 
        priceDolar: 12, 
    })
    const guardarDetailsPayment4 = await detailsPayment4.save();

    const detailsPayment5 = new detailsPayments ({
        parkingId: parking2._id,         
        hEntrada: '2022/05/15 10:00:00', 
        hSalida: '', 
        carId: car5._id,
        space: "A3", 
        priceDolar: 0, 
    })
    const guardarDetailsPayment5 = await detailsPayment5.save();

    const detailsPayment6 = new detailsPayments ({
        parkingId: parking2._id,         
        hEntrada: '2022/05/15 10:00:00', 
        hSalida: '2022/05/15 12:00:00', 
        carId: car6._id,
        space: "A4", 
        priceDolar: 0, 
    })
    const guardarDetailsPayment6 = await detailsPayment6.save();

    const detailsPayment7 = new detailsPayments ({
        parkingId: parking3._id,         
        hEntrada: '2022/05/15 14:00:00', 
        hSalida: '2022/05/15 16:00:00', 
        carId: car6._id,
        space: "A1", 
        priceDolar: 3, 
    })
    const guardarDetailsPayment7 = await detailsPayment7.save();

    const resultado = await cars.find()
    console.log(resultado) 
})()
