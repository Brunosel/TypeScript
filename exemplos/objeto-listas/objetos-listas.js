"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
};
pessoa.idade = 29;
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'desenvolvedor'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Pintora"] = 3] = "Pintora";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const Jessica = {
    nome: 'Jessica',
    idade: 20,
    // profissao: Profissao.Desenvolvedora,
    materias: ['Matematica discreta', 'Programacao']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(Jessica.materias);
