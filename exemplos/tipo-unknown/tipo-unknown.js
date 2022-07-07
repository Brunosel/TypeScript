"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
let stringTeste = 'verificar';
stringTeste = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';
let stringTeste2 = 'agora vai';
// stringTeste2 = unknownValor; ERRO
if (typeof unknownValor == 'string') {
    stringTeste2 = unknownValor;
}
