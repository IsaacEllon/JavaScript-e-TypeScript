const pessoa = {
    //nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: '30',
    endereco: {
        rua: 'Av. Brasil',
        numero: '320'
    }
};

// mudando a chave nome para a chave teste
const { nome: teste = 'Está comentado', sobrenome, idade } = pessoa; // atirbuição via desestruturação
const { endereco: {rua: r, numero}, endereco } = pessoa;
const { nome, ...resto } = pessoa;
console.log(teste, sobrenome);
console.log(r, numero, endereco);
console.log(resto);