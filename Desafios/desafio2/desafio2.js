"use strict";
// Como podemos melhorar o esse código usando TS? 
// Forma (1)
var ProfissaoD;
(function (ProfissaoD) {
    ProfissaoD[ProfissaoD["Atriz"] = 0] = "Atriz";
    ProfissaoD[ProfissaoD["Padeiro"] = 1] = "Padeiro";
})(ProfissaoD || (ProfissaoD = {}));
// Primeira forma (1)
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = ProfissaoD.Atriz;
let pessoa2 = {};
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = ProfissaoD.Padeiro;
// Segunda Forma (1)
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: ProfissaoD.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: ProfissaoD.Padeiro
};
