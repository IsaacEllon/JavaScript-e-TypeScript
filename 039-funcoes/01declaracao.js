// Declaração de função

// function hoisting - eleva a declaração da função para o topo do javascript.
falaOi();
function falaOi() {
    console.log('Oi');
}

// As funções são objetos de primeira classe.
// (First-class objects)

// functionexpression
const souUmDado = function() {
    console.log('Sou um dado.');
}
souUmDado();


//////////////////////////////////
function executaFuncao(funcao) {
    funcao();  // executa a função que será recebida no parâmetro
}
executaFuncao(souUmDado);
 

// arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();


// Dentro de um objeto
const obj = {
    falar: function() {
        console.log('Estou falando...')
    }
};
obj.falar();