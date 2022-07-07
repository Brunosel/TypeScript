const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}

pessoa.idade = 29;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'desenvolvedor'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    Pintora
}

interface Estudante extends Pessoa {
    materias: string[]
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

const vanessa: Pessoa = {
    nome: 'maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const Jessica: Estudante = {
    nome: 'Jessica',
    idade: 20,
    // profissao: Profissao.Desenvolvedora,
    materias: ['Matematica discreta', 'Programacao']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item)
    }
}

listar(Jessica.materias);