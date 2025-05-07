// Específico para estruturas iteraveis
// Não recomendado para objetos
const nomes = ['Isaac', 'Ellon', 'Oliveira'];

for (let valor of nomes) { // No lugar de retornar o índice, retorna o valor. 
    console.log(valor);
};

nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});