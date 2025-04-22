/*
Primitivos (imutável) - string, number, boolean, undefined, null (bigint, symbol)

Referência (mutável) - array, objeto, function
*/

// let c = 'A';
// let d = c;
// console.log(c, d);
// c = "Outra coisa";
// console.log(c, d);


// let a = [1, 2, 3];
// let b = [...a];  // O valor de B fica independente 
// let e = b;
// console.log(a, b);
// a.push(4);
// console.log(a, b);
// b.pop();
// console.log(a, b, e);


const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = a; 
a.nome = 'João';
console.log(b);