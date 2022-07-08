// Como podemos melhorar o esse código usando TS? 

// Forma (1)
enum ProfissaoD {
    Atriz,
    Padeiro
}

interface pessoa {
    nome: string,
    idade: number,
    profissao: ProfissaoD
    
}

// Primeira forma (1)

let pessoa1 = {} as pessoa;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = ProfissaoD.Atriz;

let pessoa2 = {} as pessoa;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = ProfissaoD.Padeiro;

// Segunda Forma (1)

let pessoa3: pessoa = {
    nome: "laura",
    idade: 32,
    profissao: ProfissaoD.Atriz
}

let pessoa4: pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: ProfissaoD.Padeiro
}