// SE DECLARA UNA FUNCION LA CUAL LE PASAREMOS COMO PARÁMETROS 2 DATOS Y MEDIANTE UN SWTICH SE APLIQUE LA OPERACION MATEMÁTICA DESEADA

function operacion(n1,n2,operador) {
    
    switch (operador) {
        case "+":
            return n1+n2;            
    
        case "-":
            return n1-n2;

        case "*":
            return n1*n2;
    
        case "/":
            return n1/n2;
    
        default:
            return 0;
    }


}

// UNA FUNCIÓN LA CUAL SOLO OBTENDRA EL DATO NOMBRE Y SALUDARÁ CUANDO SEA LLAMADA

function saludar(nombre) {
    
    return (`hola ${nombre}`);
}


module.exports={
    iva:12,
    funcion1:operacion,
    funcion2:saludar,
}