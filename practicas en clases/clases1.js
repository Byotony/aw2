const persona={
    nombre:"Byonetta",
    apellido:"Palacios",
    esdocente: false,
    geolocalizacion:{
        lat:123.12323,
        lng:9058234.23423,
    },

    getnombrecompleto(){
        return `$ {this.nombre} $ {this.apellido}`
    }
}
console.log(persona.getnombrecompleto());