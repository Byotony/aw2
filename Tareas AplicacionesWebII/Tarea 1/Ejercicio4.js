const comida = [
    {
    nombre:'AguaConConfle',
    ingredientes:'Agua, confle, Azucar',
    tipo:'Desayuno'
    },
    {
        nombre:'Arepa',
        ingredientes:'Harina de maíz, Agua, Sal, Queso, Mantequilla, Aceite',
        tipo:'Desayuno'
    },
    {
        nombre:'Arroz con huevo',
        ingredientes:'Arroz, Aceite, Huevo, Sal',
        tipo:'Desayuno'
    },
]

// //Bucle 1
// for (let b = 0; b < comida.length; b++) {
//     const comida2 = comida [b];
//     console.log(comida2);
// }


// //Bucle 2
// let b = 0;
// while (b < comida.length ) {
//     console.log(comida[b]);
//     b++
// }


// Bucle 3
comida.forEach(comida2 => {
    console.log(comida2);
});


// // Bucle 4
// let b = 0
// do {
//     console.log(comida[b]);
//     b++
// } while (b < comida.length);




