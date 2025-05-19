// filter
// Retorna um novo array
// Requer que retorne um boolean
// Sempre retornar um array, com a mesma quantidade de elementos ou menos

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor, indice, valor) {
//     return valor > 10;
// }

const numerosFiltrados = numeros.filter((valor, indice, array) => {
    // console.log(valor, indice);
    return valor > 10; 
}); 

console.log(numerosFiltrados);
console.log('################################################');
////////////////////////////////////////////////////////////////////////

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoasComNomeGrande = pessoas.filter(objeto => objeto.nome.length >= 5);
const pessoasComMasCinquenta = pessoas.filter(objeto => objeto.idade > 50);
const nomeTerminaEmA = pessoas.filter(objeto => objeto.nome.toLowerCase().endsWith('a'));

console.log(pessoasComNomeGrande);
console.log(pessoasComMasCinquenta);
console.log(nomeTerminaEmA);