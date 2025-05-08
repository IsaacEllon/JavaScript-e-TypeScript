// try - Tenta executar o que está dentro do bloco
// catch - O que vai ser executado caso ocorra algum erro no try
// throw - gera um erro

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw('x e y precisam ser números.');
        // throw new Error('x e y precisam ser números.');
    }
    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch (error) {
    // console.log(error);
    console.log('Alguma coisa mais amigável para o usuário.');
}



