// Pegar o resto se chama de: Rest operator
// No sentido de espalhar, se chama: Spread operator
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [um, dois, tres, ...variavelResto] = numeros;
// const [um, , tres, ,cinco, ,sete] = numeros;
console.log(um, dois, tres);
console.log(variavelResto);

//                     0          1          2
//                  0  1  2    0  1  2    0  1  2
const numeros2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [,[,,seis]] = numeros2
const [lista1, lista2, lista3] = numeros2;
console.log(numeros2[1][2]); 
console.log(seis);
console.log(lista2[2]);