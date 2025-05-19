// ForEach
// Só está disponível para array
// a1.forEach(function(valor, indice, array) {})

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let total = 0;

for (let valor of a1) console.log(valor);

a1.forEach(valor => total += valor);

console.log(total);