const nomes1 = new Array('Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana');
const novo = [...nomes1];
const novoSlice = nomes1.slice(1, -2);
novo.pop();
console.log(nomes1);
console.log(novoSlice);
console.log(nomes1.length);
console.log('#############################');

///////////////////////////////////////

const nome2 = 'Isaac Ellon de Oliveira Justino';
const nomes2 = nome2.split(' '); // Separa
console.log(nomes2);
console.log(nomes1.join(' ')); // Junta