function somaValoresNumericosCALLBACK(num1: number, num2: number, callback: (numero: number) => number): number {
    let resultado = num1 + num2;
    return callback(resultado);
}

function aoQuadrado(numero: number): number {
    return numero * numero;
}

console.log(somaValoresNumericosCALLBACK(2, 5, aoQuadrado));