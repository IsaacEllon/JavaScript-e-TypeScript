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


function soma(a, b = 0, c = 4) {
    console.log(a + b + c);
}
soma(2, 5);