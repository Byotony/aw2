const persona= {
    nombre: "Antony",
    apellido: "Palacios",
    esEstudiante: true,
     geolocalizacion:{
         lat:133.23424,
         lng:111.234234,
     },

     getNombreCompleto: function()
     {
         return `${this.nombre} ${this.apellido}`

     }

}

function mostrarDatos( { nombre, apellido, geolocalizacion: {lat, lng}, getNombreCompleto })
{
console.log(nombre)
console.log(apellido)
console.log(lat)
console.log(lng)
console.log(getNombreCompleto())
}

mostrarDatos(persona)