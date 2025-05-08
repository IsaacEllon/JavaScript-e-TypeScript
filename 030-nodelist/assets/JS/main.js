const paragrafos = document.querySelector('.paragrafos'); // Seleciona apenas a primeira estrutura que aparecer
const pHtml = paragrafos.querySelectorAll('p'); // Seleciona todas as estrutudas solicitadas, no caso as tags <p> da div

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of pHtml) {
    p.style.backgroundColor = backgroundColorBody;  // Cor do fundo do parágrafo
    p.style.color = '#FFFFFF'; // Cor da letra do paragrafo 
}