"use strict";
let valorAny;
valorAny - 3;
valorAny = 'ola';
valorAny = true;
let valorString1 = 'teste';
valorString1 = valorAny;
let valorString2 = 'teste';
valorString2 = valorAny;
function somaString(string1, string2) {
    console.log(string1 + string2);
}
somaString(valorString1, valorString2);
