// Funções geradoras

function* geradora1() {
    // Código qualquer ...
    yield 'Valor1';
    // Código qualquer ...
    yield 'Valor2';
    // Código qualquer ...
    yield 'Valor3';
}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());
console.log(g1.next());