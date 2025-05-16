// Metodo Slice
const nomes = ['maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

// nomes.slice(indice, delete, elem1, elem2, elem3);
// Retorna um array

const removidos = nomes.splice(4, 1);
console.log(nomes, removidos);