const comida = [ // SE CREAN UN ARREGLO CON LA INFORMACIÓN.
    {
    nombre:'AguaConConfle',
    ingrediente:'Agua, confle, Azucar',
    tipo:'Desayuno'
    },
    {
        nombre:'Arepa',
        ingrediente:'Harina de maíz, Agua, Sal, Queso, Mantequilla, Aceite',
        tipo:'Desayuno'
    },
    {
        nombre:'Arroz con huevo',
        ingrediente:'Arroz, Aceite, Huevo, Sal',
        tipo:'Desayuno'
    },
]

let y = (comida) =>{ // MENDIANTE UNA FUNCION TIPO FLECHA  SE MANDARÁ UN CICLO FOR EL CUAL PASARÁ TODOS LOS DATOS A MAYÚSCULAS.
    for (let b = 0; b < comida.length; b++) {
        comida[b].nombre = comida[b].nombre.toUpperCase();
        comida[b].ingrediente = comida[b].ingrediente.toUpperCase();
        comida[b].tipo = comida[b].tipo.toUpperCase();
    }
    return comida;
}
// console.log(y(comida)); // AQUÍ SOLO SE IMPRIMEN LOS DATOS.
let o = y(comida);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('~                     MENÚ                    ~');
for (let t = 0; t < o.length; t++) {
    console.log('\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.info('NOMBRE: '+o[t].nombre)
    console.info('INGREDIENTES: '+o[t].ingrediente)
    console.info('TIPO: '+o[t].tipo)
}
console.log('\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');