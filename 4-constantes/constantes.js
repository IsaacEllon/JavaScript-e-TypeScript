// Não podemos criar constantes com palavras reservadas pela linguagem.
// As constantes precisam ter nomes significativos.
// Não podem começar o nome de uma constantes com um número. 
// Não podem conter espaços ou traços.
// Utilizamos camelCase. 
// São case-sensitive. 
// Não podemos modificar o valor d uma constante
// Não utilize VAR, utilize CONST.

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(typeof resultadoTriplicado);



