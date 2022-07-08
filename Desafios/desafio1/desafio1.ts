// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// Primeira forma
let employee: {code: number, name: string } = {
    code: 10,
   name: 'John'
};

// Segunda forma
let employeeF2 = {
     code: 10,
     name: 'John'
}

// Terceira forma e Quarta Forma
interface employee {
    code: number,
    name: string
}
const employeeF3: employee = {
    code: 10,
    name: 'John'
}

const employeeF4 = {} as employee;
employeeF4.code = 10;
employeeF4.name = 'John';