function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', { hour12: false});
}

// function funcaoDoIntervalo() {
//     console.log(mostraHora());
// }
// setInterval(funcaoDoIntervalo, 1000); // O segundo parâmetro é o tempo em miléssimos

// setInterval - Executa o bloco no tempo informado
const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

// setTimeout - Executa o bloco no tempo definido. 
setTimeout(function() {  // Só executa uma vez
    clearInterval(timer);
}, 3000);

setTimeout(function() {
    console.log('Olá mundo!');
}, 5000);