export const nome = 'Luiz';
export const sobrenome = 'Miranda';
export const idade = 30;
const cpf = '000.000.000-00' // Não será exportado, pois não está com export

export default function soma(x, y) {  // Default = padrão
    return x + y;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// export { nome as nome2, sobrenome, idade, soma}