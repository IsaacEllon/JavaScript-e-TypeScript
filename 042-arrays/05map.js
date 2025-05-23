// map - altera o array
// Retorna um novo array
// Funciona igual o filter, mudando apenas o retorno
// map(function(valor, indice, array){})

// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);

console.log('####################################');
//////////////////////////////////////////////////////

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa 
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const nomes = pessoas.map(objeto => objeto.nome);
const idades = pessoas.map(objeto => ({ idade: objeto.idade}));
const comIds = pessoas.map((objeto, indice) => {
    const newObj = {...objeto}; // Para não modificar o objeto que está dentro do array pessoas
    newObj.id = indice;
    return newObj;
});

console.log(nomes);
console.log(idades);
console.log(comIds);