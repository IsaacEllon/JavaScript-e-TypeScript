// Array é meio que uma lista de coisas
// Array é indexavel por elemento
//                0        1       2
const alunos = ['Luiz', 'Maria', 'João'];
// alunos[0] = 'Eduardo'; // substitui o elemento
// alunos[3] = 'Luiza';  // Adicionou um elemento por não haver nenhum elemento no index 3.

// alunos[alunos.length] = 'Luiza';  // Adiciona um novo elemento
// alunos[alunos.length] = 'Fábio';  // Adiciona um novo elemento
// alunos[alunos.length] = 'Luana';  // Adiciona um novo elemento

// alunos.push('Ótavio');  // Função que adiciona um elemento no final
// alunos.push('Gabriel'); // Função que adiciona um elemento no final

alunos.unshift('Ellon');  // Função que adiciona um elemento no começo
alunos.unshift('Isaac');  // Função que adiciona um elemento no começo

// const removido = alunos.pop(); // Remove elemento do final 
// const removido = alunos.shift(); // Remove do começo
// console.log(removido)

// delete alunos[1];

console.log(alunos.slice(0, 3));
console.log(alunos.slice(0, -2));
console.log(alunos);
