// SE DECLARA UNA CONSTANTE DE PERSONA Y SE LE INGRESAN LOS RESPECTIVOS DATOS.

const persona={
    nombre:"Byonetta",
    apellido:"Palacios",
    esdocente: false,
    geolocalizacion:{
        lat:123.12323,
        lng:9058234.23423,
    },

// CON EL MÉTODO GET PODREMOS EXTRAER LA INFORMACION QUE DESEAMOS DE DICHO ARREGLO.

    getnombrecompleto(){
        return `$ {this.nombre} $ {this.apellido}`
    }
}

// AQUÍ SOLO SE IMPRIMEN LOS DATOS.
console.log(persona.getnombrecompleto());