// class persona{
//     constructor(nombre, apellido){
//         this.nombre= nombre;
//         this.apellido= apellido;
//     }
//     getnombrecompleto(){
//         return `${this.nombre} ${this.apellido}`
//     }
// }

// const personaa= new persona ("Antony", "Palacios");

// console.log(persona.getNombreCompleto());

//                                                           SEGUNDA OPERACION

// class Prueba{
//     constructor(nombre, apellido){
//         this.nombre= nombre;
//         this.apellido= apellido;
//     }
//     persona= {
//         nombre:"",
//         apellido:"",
//         esdocente:"",
//         geolocalizacion:{
//             lat:123.121212,
//             lng:76767.676767,
//         },
//         prueba: ()=>{
//             return this.nombre;
//         }
//     }
// }

//     let personax = new Prueba ('Antony','Palacios' );
//     console.log(personax.persona.prueba());


//                                                          TERCER EJEMPLO

    class Prueba{
        constructor(nombre, apellido){
            this.nombre= nombre;
            this.apellido= apellido;
        }
        persona= {
            nombre:"",
            apellido:"",
            esdocente:"",
            geolocalizacion:{
                lat:123.121212,
                lng:76767.676767,
            },
            prueba: ()=>{
                return this.nombre;
            }
        }
    }
    
        let personax = new Prueba ('Antony','Palacios' );
        console.log(personax.persona.prueba());