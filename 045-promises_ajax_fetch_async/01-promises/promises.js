// Promises
// Roda em paralelo/ segundo plano
// Se ocorre um erro na cadeia, vai direto para o catch()

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('ERRO'));

        setTimeout(() => {
        resolve(msg);
        }, tempo);
        
    }); 
}

esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados na BD', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(2222, rand(1, 3));
    })
    .then(resposta => {
        console.log('Exive dados na tela');
    })
    .catch(e => {
        console.log('ERRO', e);
    });

console.log('Isso aqui será exibido antes de qualquer promises');


