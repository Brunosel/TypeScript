let valorAny: any;
valorAny - 3;
valorAny = 'ola';
valorAny = true;

let valorString1: string = 'teste';
valorString1 = valorAny;
let valorString2: string = 'teste';
valorString2 = valorAny;

function somaString(string1: string, string2: string) {
    console.log(string1 + string2);
}

somaString(valorString1, valorString2);