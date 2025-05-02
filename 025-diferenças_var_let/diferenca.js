// A let não pode ser redeclarada
// let nome = 'Isaac';
// let nome = 'Ellon';

// let tem escopo de bloco
// var só tem escopo de função

const verdadeira = true;
let nome = 'Luiz'; // Criando
var nome2 = 'Luiz'; // Criando

if (verdadeira) {
    let nome = 'Otávio'; // Criando
    var nome2 = 'Rogério'; // Redeclarando
    console.log(nome, nome2);
    if (verdadeira) {
        let nome = 'Outra coisa'; // Criando
        var nome2 = 'Ronaldo'; // Redeclarando
        console.log(nome, nome2);
    }
}

console.log(nome, nome2);