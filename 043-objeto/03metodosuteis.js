// Object.values
// Object.entries
// Object.assign(des, any)
// Object.getOwnPropertyDescriptor(obj, 'prop')
// ...(spread)

// Já vimos:
// Object.keys (retorna as chaves)
// Object.freeze (congela o objeto)
// Object.defineProperties (Define várias propriedas)
// Object.defineProperty (Define uma propriedade)

const produto = { nome: 'Caneca', preco: 1.8};
// const outraCoisa = { // Gera uma cópia de produto
//     ...produto,
//     material: 'Porcelana',
// };  

// const caneca = Object.assign( {}, produto, {material: 'Porcelana'}); // Gera uma cópia de produto
// const caneca = { nome: produto.nome, preco: produto.preco }; // Pega chaves específicas

// Object.defineProperty(produto, 'nome', {
//     writable: false, configurable: false
// });
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // Retornar as propriedadas das chaves

console.log(Object.keys(produto));
console.log(Object.values(produto));
console.log(Object.entries(produto));