function jogaErro(erro: string, codigo: number): void {
    throw {error: erro, code: codigo};
}

jogaErro('deu erro', 500);