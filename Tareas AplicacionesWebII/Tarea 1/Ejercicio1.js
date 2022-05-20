let b = 0; // SE DECLARA LA VARIABLE INICIALIZADA.

const multiplicar = function (b) {
    for (let multiplicar = 1; multiplicar <= 12 ; multiplicar++) {
       console.log(multiplicar + '*' + b +'=' +(multiplicar*b)); // CON EL CICLO LO QUE ESTAMOS HACIENDO ES UNA MULTIPLICACION BÁSICA
    }
}

multiplicar(6) // SE LE PASA EL DATO.