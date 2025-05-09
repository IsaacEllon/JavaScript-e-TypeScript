function criaHoraSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
};

const relogio = document.querySelector('.relogio');
// const iniciar = document.querySelector('.iniciar');
// const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraSegundos(segundos);
    }, 1000);
}

function cronometro () {
    document.addEventListener('click', function(e) {
    const elemento = e.target;  // target indica o que está sendo clicado

    if (elemento.classList.contains('zerar')) {  // contains serve para pegar a class
        zerar.addEventListener('click', function(event) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;});
        relogio.classList.remove('pausado');
    }

    if (elemento.classList.contains('iniciar')) {  // Se a class do objeto for iniciar, vai ser executado o bloco
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }
    
    if (elemento.classList.contains('pausar')) { // Se a class do objeto for pausar, vai ser executado o bloco
        clearInterval(timer);
        relogio.classList.add('pausado'); // adiciona a class do CSS .pausado.
    }
 });

};

cronometro();
