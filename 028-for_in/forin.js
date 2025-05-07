const frutas = ['Pera', 'Maça', 'Uva'];
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30,
};

// for in -> ler os índices ou chaves do objeto

for (let i in frutas) {  
    console.log(frutas);
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}