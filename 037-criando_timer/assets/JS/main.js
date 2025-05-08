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
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraSegundos(segundos);
    }, 1000);
}

document.addEventListener('click', function(e) {
    const elemento = e.target;

    if (elemento.classList.contains('zerar')) {
        zerar.addEventListener('click', function(event) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    });
    }
})

iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.classList.add('pausado');
});

