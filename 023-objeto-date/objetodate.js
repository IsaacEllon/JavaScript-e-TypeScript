// Função construtora
// As funções construtoras possuem a primeira letra Maiuscula.
// new Date(0); Marco 0 - 01/01/1970 - Timestamp unix ou época unix
// O tempo é contado em milisengundo
// const treshoras = 60 * 60 * 3 * 1000;
// const umdia = 60 * 60 * 24 * 1000;
// const data = new Date(2025, 3, 30, 15, 14, 27, 500); // Ano, mes, dia, hora, minuto, segundo, milessimo de segundo.
// const data = new Date('2025-04-21T20:15:59.500');

// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth()); // Mês começa do 0
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('MS', data.getMilliseconds());
// console.log('Dia Semana', data.getDay()); // 0 = Domingo  6 = Sábado
// console.log(data.toString());
// console.log(Date.now()); // Do marco 0 até o dia atual em miléssimo 

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1); // Mês começa do 0
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getMonth());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);