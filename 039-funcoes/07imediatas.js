// IIFE - Immediately invoked function expression

(function() {
    const nome = 'Luiz'
    console.log(nome);
})();

/////////////////////////////
(function(idade, peso, altura) {
    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luiz'));
    }

    falaNome();
    console.log(peso, idade, altura);

})(30, 80, 1.80);