let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';

let stringTeste: string = 'verificar';
stringTeste = anyEstaDeVolta;


let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';

let stringTeste2: string = 'agora vai';
// stringTeste2 = unknownValor; ERRO

if (typeof unknownValor == 'string') {
    stringTeste2 = unknownValor;
}
