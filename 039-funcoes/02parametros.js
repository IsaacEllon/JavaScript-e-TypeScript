// argumentos que sustenta todos os argumentos enviados.
function funcao () {
    //console.log(arguments); // arguments - armazenaem um objeto o que foi passado no momento de chamar a função
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//////////////////////////////////////
function soma(a, b = 0, c = 4) {
    console.log(a + b + c);
}
soma(2, 5);

//////////////////////////////////////
function desetruturacao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}
desetruturacao({nome: 'Luiz', sobrenome: 'Otávio', idade: 20});

//////////////////////////////////////
// function conta(operador, acumulador, ...numeros) { // ... - para o resto
//     for (let numero of numeros) {
//         if (operador === '+') acumulador += numero;
//         if (operador === '-') acumulador -= numero;
//         if (operador === '/') acumulador /= numero;
//         if (operador === '*') acumulador *= numero;
        
//     }
//     console.log(acumulador);
// }

const conta = function (operador, acumulador, ...numeros) { // ... - para o resto
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
        
    }
    console.log(acumulador);
}

conta('/', 1, 20, 30, 40, 50);