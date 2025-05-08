function criaHoraSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
};

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos;

function iniciaRelogio() {
    const timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = segundos;
    }, 1000);


iniciar.addEventListener('click', function(event) {
    iniciaRelogio();
});

// pausar.addEventListener('click', function(event) {
//     alert('Cliquei');
// });

// zerar.addEventListener('click', function(event) {
//     alert('Cliquei');
// });