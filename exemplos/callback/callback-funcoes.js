"use strict";
function somaValoresNumericosCALLBACK(num1, num2, callback) {
    let resultado = num1 + num2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
console.log(somaValoresNumericosCALLBACK(2, 5, aoQuadrado));
