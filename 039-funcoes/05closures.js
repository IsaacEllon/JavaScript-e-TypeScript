// CLosures -Lembra do seu escopo lexico
function retornaFuncao() {
    const nome = 'Luiz';
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao();
console.log(funcao);