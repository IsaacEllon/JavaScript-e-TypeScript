// Capturar o evento de submit
const form = document.querySelector('#formulario');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso'); //event.target vai informar o elemento da página que está recebendo o evento
    const inputaltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value); // Pega o valor é Number do input
    const altura = Number(inputaltura.value); 

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura Inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    
    const resultadoImc = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(resultadoImc, true);
});



function getNivelImc (imc) {
    const nivel = ['Abaixo do peso','Peso normal', 'Sobrepeso', 'Obesidade grau 1',
        'Obesidade grau 2', 'Obesidade grau 3'];

    // Quando a condição possui apenas uma linha de código, pode se colocar ela sem as chaves.
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1]; 
    if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// Função para criar um parafrafo em HTML
function criaP (){
    const paragrafo = document.createElement('p'); // Cria um paragrafo(<p>) em HTML
    return paragrafo;
}

// Função para exibir o resultado
function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; 

    const p = criaP();
    
    // Atribui um estilo para a DIV de acordo com o resultado boolean
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    };

    p.innerHTML = msg;
    resultado.appendChild(p) // Adiciona dados da mensagem dentro da função criaP

}
