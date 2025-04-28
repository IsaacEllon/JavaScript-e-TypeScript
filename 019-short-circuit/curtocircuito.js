/*
Valores avaliados em falso
    false
    0
    ''  ""  ``
    Null / undefined
    NaN
*/

// && -> false && true -> false (Retorna o valor que está falso)
function falaOi() {
    return 'oi';
};

let vaiExecutar = false;
console.log(vaiExecutar && falaOi());

// || -> true || false -> Retornar o valor verdadeiro.
const corUsuario = null;
const corpadrao = corUsuario || 'preto';
console.log(corpadrao);