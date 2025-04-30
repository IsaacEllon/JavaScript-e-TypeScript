// Operadores
// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';
// ? - para condição verdadeira
// : - para condição falsa
const pontuacaoUsuario = 1050;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';

console.log(nivelUsuario, corPadrao);
