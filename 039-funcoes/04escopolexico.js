// A função reconhece a bolha de escopo, até encontrar o valor.
const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}
falaNome();

function usaFalaNome() {
    const nome = 'Otávio';
    falaNome();
}
usaFalaNome();