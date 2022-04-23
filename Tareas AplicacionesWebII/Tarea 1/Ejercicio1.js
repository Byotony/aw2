let b = 0;

const multiplicar = function (b) {
    for (let multiplicar = 1; multiplicar <= 12 ; multiplicar++) {
       console.log(multiplicar + '*' + b +'=' +(multiplicar*b));
    }
}

multiplicar(6)