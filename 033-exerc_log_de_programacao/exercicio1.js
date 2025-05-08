// Escrever uma função que recebe 2 números e retorna o maior
const num1 = 4;
const num2 = 9;

// Minha solução
// function resultado (num1, num2) {
//     if (num1 < num2) {
//         console.log(`O número ${num2} é maior que o ${num1}.`);
//     } else if (num1 > num2) {
//         console.log(`O número ${num1} é maior que o ${num2}.`);
//     } else {
//         console.log(`Os números são iguais.`);
//     }
// }
// resultado(num1, num2);

function max (x, y) {
    return x > y ? x : y;
}

// arrow function
const max2 = (x, y) => x > y ? x : y;


console.log(max2(50, 20));