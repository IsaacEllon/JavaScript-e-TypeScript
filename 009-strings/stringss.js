//               01234567
let umaString = 'Um texto';
let outraString = 'O rato roeu a roupa do rei de roma.'

console.log(umaString[4]);
console.log(umaString.charAt(6));
console.log(umaString.concat(' em', ' um', ' lindo dia.'));
console.log(`${umaString} em um lindo dia.`);
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('o', 3));
console.log(umaString.match(/[a-z]/g)); // expressões regulares
console.log(umaString.search(/[x]/g));
console.log(umaString.replace('Um', 'Outra')); // Substitui o texto. 
console.log(outraString.replace(/r/g, '3'));  // A flag 'g' serve para aplicar em todas as letras R. 
console.log(outraString.length); // Tamanho da string
console.log(outraString.length -3);
console.log(outraString.slice(2, 6)); // Seleciona o texto pelos indices. 
console.log(outraString.slice(-5, -1));  // Seleciona um determinado espaço (index)
console.log(outraString.substring(outraString.length - 5, outraString.length - 1));
console.log(outraString.split(' ', 3)); //Divide a string.
console.log(outraString.toUpperCase()); // Letras maiusculas
console.log(outraString.toLowerCase()); // Letra minuscula