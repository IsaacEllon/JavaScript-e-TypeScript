function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);
// While verifica a condição e depois executa o laço
while (rand !== 10) {
    rand = random(min, max); // Chamando a função random
    console.log(rand);
}

console.log('###########');

// Do while executa o laço e depois verifica a condição
do {
    rand = random(min, max); // Chamando a função random
    console.log(rand);
} while (rand !== 10);