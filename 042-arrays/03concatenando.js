const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = num1.concat(num2, [7, 8, 9], 'Luiz');

// ...rest -> ...spread
// ...spread também serve para objetos
const num4 = [...num1, 'Isaac', ...num2, ...[7, 8, 9]]; 

console.log(num4);