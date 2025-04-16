// IEEE 754-2008 - Precisão da conta
let num1 = 10;
let num2 = 2.5;
let num3 = 0.7;
let num4 = 0.1;

num3 += num4;  // 0.8;
num3 += num4;  // 0.9;
num3 += num4;  // 1.0;
num3 = parseFloat(num3.toFixed(2));
console.log(num3);
console.log(Number.isInteger(num3))

// console.log(num1.toString() + num2);

// num1 = num1.toString(2);
// console.log(num1);

// console.log(num1.toFixed(2));

// console.log(Number.isInteger(num1)); // Identifica se o número é inteiro;

// let temp = num1 * 'olá';
// console.log(Number.isNaN(temp)); // Retornar True se a conta for inválida. 