// SOLO SE GENERA UN ARREGLO CON LOS DATOS

const persona= {
    nombre: "Antony",
    apellido: "Palacios",
    esEstudiante: true,
     geolocalizacion:{
         lat:133.23424,
         lng:111.234234,
     },
// SE CREA UN MÉTODO PARA CONSULTAR LOS NOMBRES
     getNombreCompleto: function()
     {
         return `${this.nombre} ${this.apellido}`

     }

}

// SE CREA UNA FUNCION PARA MOSTRAR LOS DATOS QUE SEAN NECESARIOS.

function mostrarDatos( { nombre, apellido, geolocalizacion: {lat, lng}, getNombreCompleto })
{
console.log(nombre)
console.log(apellido)
console.log(lat)
console.log(lng)
console.log(getNombreCompleto())
}

mostrarDatos(persona)