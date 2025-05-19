// Metodo Slice
const nomes = ['maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

// nomes.slice(indice, delete, elem1, elem2, elem3);
// Retorna um array

// const removidos = nomes.splice(4, 1);
// const removidos = nomes.splice(-2, Number.MAX_VALUE);
// const removidos = nomes.splice(3, 0, 'Ellon'); // Adiciona a string Ellon no indice 3.
// console.log(nomes, removidos);

// pop
// nomes.splice(-1, 1);

// shift
// nomes.splice(0, 1);

// push
// nomes.splice(nomes.length, 0, 'Luiz', 'Otávio');

// unshift
nomes.splice(0, 0, 'Isaac', 'Ellon');

console.log(nomes);
